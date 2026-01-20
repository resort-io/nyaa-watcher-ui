import * as cheerio from 'cheerio';
import type { CheerioAPI } from "cheerio";
import { fetchHtml, getCategoryTitle, getDomain, toStr, toNum } from "./utils"
import type { ScrapeSearchOptions, ScrapedSearchTorrent } from "@/types/scraping";
import type {
    NyaaSubcategoryTitle,
    SukebeiSubcategoryTitle,
    NyaaSubcategoryId,
    SukebeiSubcategoryId, NyaaTorrentSize,
} from "@/types/nyaa";

const createFeedUrl = (options?: Partial<ScrapeSearchOptions>): string => {
    const user = options?.user ? `/user/${options.user.trim()}` : '';
    const category = `c=${options?.category ?? '0_0'}`;
    const filter = `&f=${options?.filter ?? 0}`;
    const order = `&o=${options?.order ? options.order.trim() : 'desc'}`;
    const page = `&p=${options?.page && options.page > 0 ? options.page : 1}`;
    const sort = `&s=${options?.sort?.trim() ?? 'id'}`;
    const query = options?.query ? `&q=${encodeURIComponent(options?.query.replace(' ', '+'))}` : '';

    return getDomain(options?.isSukebei ?? false).concat(user, '?', category, filter, sort, order, page, query)
}

const validateSearchTorrent = (data: Partial<ScrapedSearchTorrent>) => {
    if (
        !data.categoryId
        || !data.id
        || !data.published
        || !data.size
        || !data.timestamp
        || !data.title
    ) {
        return null;
    }
    return data as ScrapedSearchTorrent;
}

/** @throws Error When the fetch fails. */
export const scrapeSearchPage = async (options?: ScrapeSearchOptions) => {
    const url = createFeedUrl(options);
    const html = await fetchHtml(url);
    const $: CheerioAPI = cheerio.load(html);

    const rows = $(`table.table.table-bordered.table-hover.table-striped.torrent-list > tbody`).children();
    const results: ScrapedSearchTorrent[] = [];

    rows.each((_index, trElement) => {
        const children = $(trElement).children();
        const categoryId = children.eq(0).find('a').attr('href')?.trim().replace('/?c=', '') as NyaaSubcategoryId | SukebeiSubcategoryId;
        const link = children.eq(2).children().first().attr('href')?.trim();

        const data: Partial<ScrapedSearchTorrent> = {
            category: getCategoryTitle(categoryId, options?.isSukebei) as NyaaSubcategoryTitle | SukebeiSubcategoryTitle,
            categoryId,
            comments: toNum(children.eq(1).find('a.comments').text().trim()) ?? 0,
            downloads: toNum(children.eq(7).text().trim()) ?? -1,
            id: toNum(children.eq(1).children().first().attr('href')?.trim().replace('/view/', '')) ?? -1,
            isRemake: $(trElement).hasClass('danger') ?? false,
            isTrusted: $(trElement).hasClass('success') ?? false,
            leechers: toNum(children.eq(6).text().trim()) ?? -1,
            link: link ? getDomain(options?.isSukebei ?? false) + link : undefined,
            magnet: toStr(children.eq(2).children().last().attr('href')?.trim()) ?? undefined,
            published: toStr(children.eq(4).text().trim()),
            size: toStr(children.eq(3).text().trim()) as NyaaTorrentSize,
            seeders: toNum(children.eq(5).text().trim()) ?? -1,
            timestamp: toNum(children.eq(4).attr('data-timestamp')?.trim() || '0') ?? -1,
            title: toStr(children.eq(1).children().last().text().trim()),
        }

        const validated = validateSearchTorrent(data);
        if (validated) {
            results.push(validated);
        }
    })

    return results;
}
