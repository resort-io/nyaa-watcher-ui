import type {
    NyaaFilterId,
    NyaaCategoryId,
    SukebeiCategoryId,
    NyaaSubcategoryId,
    SukebeiSubcategoryId,
    NyaaSubcategoryTitle,
    SukebeiSubcategoryTitle,
    NyaaTorrentSize,
} from "@/types/nyaa";


type ScrapeSearchPageOptionsBase = {
    filter?: NyaaFilterId;
    order?: 'asc' | 'desc';
    page?: number;
    query?: string;
    sort?: 'comments' | 'downloads' | 'id' | 'leechers' | 'seeders' | 'size';
    user?: string;
    category?: NyaaCategoryId | SukebeiCategoryId;
    isSukebei?: boolean;
}

export type NyaaScrapeSearchPageOptions = Omit<ScrapeSearchPageOptionsBase, 'category' | 'isSukebei'> & {
    category?: NyaaCategoryId;
    isSukebei?: false;
}

export type SukebeiScrapeSearchPageOptions = Omit<ScrapeSearchPageOptionsBase, 'category' | 'isSukebei'> & {
    category?: SukebeiCategoryId;
    isSukebei: true;
}

export type ScrapeSearchPageOptions = NyaaScrapeSearchPageOptions | SukebeiScrapeSearchPageOptions;

// TODO: Add 'subcategory' field
export type ScrapedSearchPageTorrent = {
    category: NyaaSubcategoryTitle | SukebeiSubcategoryTitle;
    categoryId: NyaaSubcategoryId | SukebeiSubcategoryId;
    comments: number;
    downloads: number;
    id: number;
    isRemake: boolean;
    isTrusted: boolean;
    leechers: number;
    link?: string | null;
    magnet?: string | null;
    /** Original title with the tags. */
    originalTitle: string;
    published: string;
    size: NyaaTorrentSize;
    seeders: number;
    tags: string[];
    timestamp: number;
    title: string;
    userTag?: string;
}


export type NyaaScrapeTorrentPageOptions = {
    id: number;
    isSukebei?: false;
}

export type SukebeiScrapeTorrentPageOptions = {
    id: number;
    isSukebei: true;
}

export type ScrapeTorrentPageOptions = NyaaScrapeTorrentPageOptions | SukebeiScrapeTorrentPageOptions;

export type ScrapedTorrentPageFile = {
    name: string;
    size: NyaaTorrentSize;
}

export type ScrapedTorrentPageFolder = {
    name: string;
    files: (ScrapedTorrentPageFile|ScrapedTorrentPageFolder)[];
}

export type ScrapedTorrentPageComment = {
    content: string;
    published: string;
    timestamp: number;
    user: string;
}

// TODO: Add 'subcategory' field
export type ScrapedTorrentPage = {
    category: NyaaSubcategoryTitle | SukebeiSubcategoryTitle;
    categoryId: NyaaSubcategoryId | SukebeiSubcategoryId;
    comments: ScrapedTorrentPageComment[];
    description?: string;
    downloads: number;
    files: (ScrapedTorrentPageFile|ScrapedTorrentPageFolder)[];
    hash: string;
    information?: string;
    isRemake: boolean;
    isTrusted: boolean;
    isTrustedUser: boolean;
    link?: string;
    leechers: number;
    magnet?: string;
    /** Original title with the tags. */
    originalTitle: string;
    published: string;
    seeders: number;
    size: NyaaTorrentSize;
    tags: string[];
    timestamp: number;
    title: string;
    user: string;
    userTag?: string;
}
