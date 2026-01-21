import type { Cheerio } from "cheerio";
import type { NyaaCategoryId, NyaaCategoryTitle, SukebeiCategoryId, SukebeiCategoryTitle } from "@/types/nyaa";

export const fetchHtml = async (url: string) => {
    let response: Response;

    try {
        response = await fetch(url);
    } catch (err) {
        throw new Error('Encountered error while fetching page', { cause: err });
    }

    if (!response.ok) {
        throw new Error(`Nyaa server returned status ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    if (!html) {
        throw new Error('Could not find HTML data');
    }

    return html;
}

export const getCategoryId = (category: NyaaCategoryTitle | SukebeiCategoryTitle | (string & {}) | undefined, isSukebei: boolean = false): NyaaCategoryId | SukebeiCategoryId => {
    const lowerCategory = category?.toLowerCase();
    if (!lowerCategory || lowerCategory.toLowerCase() === 'all') return '0_0'

    if (isSukebei) {
        if (lowerCategory.startsWith('art')) {
            if (lowerCategory === 'art') return '1_0';
            if (lowerCategory.endsWith('anime')) return '1_1';
            if (lowerCategory.endsWith('doujinshi')) return '1_2';
            if (lowerCategory.endsWith('games')) return '1_3';
            if (lowerCategory.endsWith('manga')) return '1_4';
            if (lowerCategory.endsWith('pictures')) return '1_5';
        }
        else if (lowerCategory.startsWith('real life')) {
            if (lowerCategory === 'real life') return '2_0';
            if (lowerCategory.endsWith('photobooks and pictures')) return '2_1';
            if (lowerCategory.endsWith('videos')) return '2_2';
        }
        return '0_0';
    }

    if (lowerCategory.startsWith('anime')) {
        if (lowerCategory === 'anime') return '1_0';
        if (lowerCategory.endsWith('anime music video')) return '1_1';
        if (lowerCategory.endsWith('english-translated')) return '1_2';
        if (lowerCategory.endsWith('non-english-translated')) return '1_3';
        if (lowerCategory.endsWith('raw')) return '1_4';
    }
    else if (lowerCategory.startsWith('audio')) {
        if (lowerCategory === 'audio') return '2_0';
        if (lowerCategory.endsWith('lossy')) return '2_1';
        if (lowerCategory.endsWith('lossless')) return '2_2';
    }
    else if (lowerCategory.startsWith('manga')) {
        if (lowerCategory === 'manga') return '3_0';
        if (lowerCategory.endsWith('english-translated')) return '3_1';
        if (lowerCategory.endsWith('non-english-translated')) return '3_2';
        if (lowerCategory.endsWith('raw')) return '3_3';
    }
    else if (lowerCategory.startsWith('live action')) {
        if (lowerCategory === 'live action') return '4_0';
        if (lowerCategory.endsWith('english-translated')) return '4_1';
        if (lowerCategory.endsWith('non-english-translated')) return '4_2';
        if (lowerCategory.endsWith('idol/promotional video')) return '4_3';
        if (lowerCategory.endsWith('raw')) return '4_4';
    }
    else if (lowerCategory.startsWith('pictures')) {
        if (lowerCategory === 'pictures') return '5_0';
        if (lowerCategory.endsWith('graphics')) return '5_1';
        if (lowerCategory.endsWith('photos')) return '5_2';
    }
    else if (lowerCategory.startsWith('software')) {
        if (lowerCategory === 'software') return '6_0';
        if (lowerCategory.endsWith('applications')) return '6_1';
        if (lowerCategory.endsWith('games')) return '6_2';
    }
    return '0_0';
}

export const getCategoryTitle = (categoryId: NyaaCategoryId | SukebeiCategoryId | undefined, isSukebei: boolean = false): NyaaCategoryTitle | SukebeiCategoryTitle => {
    if (!categoryId || categoryId === '0_0') return 'All';

    if (isSukebei) {
        if (categoryId.startsWith('1')) {
            if (categoryId === '1_0') return 'Art';
            if (categoryId === '1_1') return 'Art - Anime';
            if (categoryId === '1_2') return 'Art - Doujinshi';
            if (categoryId === '1_3') return 'Art - Games';
            if (categoryId === '1_4') return 'Art - Manga';
            if (categoryId === '1_5') return 'Art - Pictures';
        }
        else if (categoryId.startsWith('2')) {
            if (categoryId === '2_0') return 'Real Life';
            if (categoryId === '2_1') return 'Real Life - Photobooks and Pictures';
            if (categoryId === '2_2') return 'Real Life - Videos';
        }
        return 'All';
    }

    if (categoryId.startsWith('1')) {
        if (categoryId === '1_0') return 'Anime';
        if (categoryId === '1_1') return 'Anime - Anime Music Video';
        if (categoryId === '1_2') return 'Anime - English-Translated';
        if (categoryId === '1_3') return 'Anime - Non-English-Translated';
        if (categoryId === '1_4') return 'Anime - Raw';
    }
    else if (categoryId.startsWith('2')) {
        if (categoryId === '2_0') return 'Audio';
        if (categoryId === '2_1') return 'Audio - Lossy';
        if (categoryId === '2_2') return 'Audio - Lossless';
    }
    else if (categoryId.startsWith('3')) {
        if (categoryId === '3_0') return 'Manga';
        if (categoryId === '3_1') return 'Manga - English-Translated';
        if (categoryId === '3_2') return 'Manga - Non-English-Translated';
        if (categoryId === '3_3') return 'Manga - Raw';
    }
    else if (categoryId.startsWith('4')) {
        if (categoryId === '4_0') return 'Live Action';
        if (categoryId === '4_1') return 'Live Action - English-Translated';
        if (categoryId === '4_2') return 'Live Action - Non-English-Translated';
        if (categoryId === '4_3') return 'Live Action - Idol/Promotional Video';
        if (categoryId === '4_4') return 'Live Action - Raw';
    }
    else if (categoryId.startsWith('5')) {
        if (categoryId === '5_0') return 'Pictures';
        if (categoryId === '5_1') return 'Pictures - Graphics';
        if (categoryId === '5_2') return 'Pictures - Photos';
    }
    else if (categoryId.startsWith('6')) {
        if (categoryId === '6_0') return 'Software';
        if (categoryId === '6_1') return 'Software - Applications';
        if (categoryId === '6_2') return 'Software - Games';
    }
    return 'All';
}

export const getDomain = (isSukebei?: boolean) => isSukebei ? 'https://sukebei.nyaa.si' : 'https://nyaa.si'; // TODO: Use config

export const getTorrentUserTag = (torrentTitle?: string) => {
    if (!torrentTitle) return undefined;

    const match = torrentTitle.match(/^\s*\[([^\]]+)\]/);
    return match?.[1] ?? undefined;
}

export const getTorrentTags = (torrentTitle?: string) => {
    if (!torrentTitle) return [];

    const withoutUserTag = torrentTitle.replace(/^\s*\[([^\]]+)\]/, '');
    const matches = withoutUserTag.match(/\[([^\]]+)\]/g);
    if (!matches) return [];

    return matches.map(match => match.slice(1, -1));
}

export const removeTagsFromTitle = (torrentTitle?: string) => {
    if (!torrentTitle) return undefined;
    return torrentTitle.replace(/\[[^\]]*\]/g, '').replaceAll('  ', ' ').trim();
}

export const toStr = (value: string | number | undefined) => {
    const result = `${value}`.trim();
    return !result ? undefined : result;
}

export const toNum = (value: string | number | undefined, min?: number) => {
    const result = parseInt(`${value}`.trim());
    return (isNaN(result) || min && result < min) ? null : result;
}

export const hasClass = (element: Cheerio<any>, className: string) => {
    return !element.html()?.trim() ? null : element.hasClass(className);
}
