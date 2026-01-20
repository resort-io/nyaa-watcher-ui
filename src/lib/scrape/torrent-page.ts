import * as cheerio from 'cheerio';
import type { AcceptedElems, CheerioAPI } from "cheerio";
import { fetchHtml, getCategoryId, getDomain, hasClass, toStr, toNum } from "./utils"
import type {
    ScrapedTorrentComment,
    ScrapedTorrent,
    ScrapedTorrentFile,
    ScrapedTorrentFolder,
    ScrapeTorrentOptions,
} from "@/types/scraping";
import type {
    NyaaSubcategoryId,
    NyaaSubcategoryTitle, NyaaTorrentSize,
    SukebeiSubcategoryId,
    SukebeiSubcategoryTitle
} from "@/types/nyaa.ts";

const validatePage = (data: Partial<ScrapedTorrent>) => {
    if (
        !data.category
        || !data.hash
        || !data.published
        || !data.size
        || !data.timestamp
        || !data.title
        || !data.user
    ) {
        return null;
    }
    return data as ScrapedTorrent;
}

const getTorrentPageFiles = ($: CheerioAPI, element?: AcceptedElems<any>): (ScrapedTorrentFile|ScrapedTorrentFolder)[] => {
    let filelist: (ScrapedTorrentFile|ScrapedTorrentFolder)[] = [];
    const ulElement = element ? $(element).children().last() : $('div.torrent-file-list.panel-body > ul').first();

    if (ulElement.children().length > 0) {
        ulElement.children().each((_index, liElement) => {
            const firstChild = $(liElement).children().first();

            // Folder
            if (firstChild.hasClass('folder')) {
                const name = firstChild.text().trim();
                const files = getTorrentPageFiles($, liElement);
                filelist.push({ name, files });
            }

            // File
            else if (firstChild.hasClass('fa-file')) {
                const size = $(liElement).find('span.file-size').text().replace(/[()]/g, '').trim() as NyaaTorrentSize;
                const name = $(liElement).text().replace(`(${size})`, '').trim();
                filelist.push({ name, size });
            }
        })
    }

    return filelist;
}

const getTorrentPageComments = ($: CheerioAPI): ScrapedTorrentComment[] => {
    let comments: ScrapedTorrentComment[] = [];
    const commentsEl = $('#collapse-comments').children();

    if (commentsEl.children().length > 0) {
        commentsEl.each((_index, element) => {
            const time = $(element).find('div.panel-body > div.col-md-10.comment > div.row.comment-details > a > small').first();

            comments.push({
                content: $(element).find('div.panel-body > div.col-md-10.comment > div.row.comment-body > div.comment-content').text().trim(),
                published: time.text().trim(),
                timestamp: parseInt(time.attr('data-timestamp')?.trim() || '') | 0,
                user: $(element).find('div.panel-body > div.col-md-2 > p > a').first().text().trim(),
            });
        });
    }

    return comments;
}

export const scrapeTorrentPage = async (options: ScrapeTorrentOptions) => {
    const url = getDomain(options.isSukebei ?? false) + `/view/${options.id}`;
    const html = await fetchHtml(url);
    const $: CheerioAPI = cheerio.load(html);

    const downloadElements = $('div.panel-footer.clearfix > a');
    const infoElementOne = $(`div.panel-body > div.row:nth-child(1) > div.col-md-5`);
    const infoElementTwo = $(`div.panel-body > div.row:nth-child(2) > div.col-md-5`);
    const infoElementThree = $(`div.panel-body > div.row:nth-child(3) > div.col-md-5`);
    const infoElementFour = $(`div.panel-body > div.row:nth-child(4) > div.col-md-5`);

    const category = toStr(infoElementOne.first().text()) as NyaaSubcategoryTitle | SukebeiSubcategoryTitle;
    const downloadAttr = toStr(downloadElements.first().attr('href'));
    const description = toStr($('#torrent-description').text());
    const headerElement = $('body > div.container').first().children().first();
    const information = toStr(infoElementThree.first().text());

    const data: Partial<ScrapedTorrent> = {
        category,
        categoryId: getCategoryId(category, options.isSukebei ?? false) as NyaaSubcategoryId | SukebeiSubcategoryId,
        comments: getTorrentPageComments($),
        description: description === '#### No description.' ? undefined : description,
        downloads: toNum(infoElementFour.last().text().trim()) ?? -1,
        files: getTorrentPageFiles($),
        hash: toStr($(`div.panel-body > div.row:nth-child(5) > div.col-md-5`).first().text()),
        information: information === 'No information.' ? undefined : information,
        isRemake: hasClass(headerElement, 'panel-danger') ?? false,
        isTrusted: hasClass(headerElement, 'panel-success') ?? false,
        isTrustedUser: hasClass(infoElementTwo.first(), 'success') ?? false,
        link: downloadAttr && downloadElements.first().text().includes('Download') ? getDomain(options.isSukebei) + downloadAttr : undefined,
        leechers: toNum(infoElementThree.last().text().trim()) ?? -1,
        magnet: downloadElements.last().text().includes('Magnet') ? toStr(downloadElements.last().attr('href')) : undefined,
        published: toStr(infoElementOne.last().text()),
        seeders: toNum(infoElementTwo.last().text().trim()) ?? -1,
        size: toStr(infoElementFour.first().text()) as NyaaTorrentSize,
        timestamp: toNum(infoElementOne.last().attr('data-timestamp')?.trim()) ?? undefined,
        title: toStr($('h3.panel-title').first().text()),
        user: toStr(infoElementTwo.first().text()),
    }

    return validatePage(data);
}
