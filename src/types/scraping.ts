import type {
    NyaaFilterId,
    NyaaCategoryId,
    SukebeiCategoryId,
    NyaaSubcategoryId,
    SukebeiSubcategoryId,
    NyaaSubcategoryTitle,
    SukebeiSubcategoryTitle, NyaaTorrentSize,
} from "@/types/nyaa";


type ScrapeSearchOptionsBase = {
    filter?: NyaaFilterId;
    order?: 'asc' | 'desc';
    page?: number;
    query?: string;
    sort?: 'comments' | 'downloads' | 'id' | 'leechers' | 'seeders' | 'size';
    user?: string;
    category?: NyaaCategoryId | SukebeiCategoryId;
    isSukebei?: boolean;
}

export type NyaaScrapeSearchOptions = Omit<ScrapeSearchOptionsBase, 'category' | 'isSukebei'> & {
    category?: NyaaCategoryId;
    isSukebei?: false;
}

export type SukebeiScrapeSearchOptions = Omit<ScrapeSearchOptionsBase, 'category' | 'isSukebei'> & {
    category?: SukebeiCategoryId;
    isSukebei: true;
}

export type ScrapeSearchOptions = NyaaScrapeSearchOptions | SukebeiScrapeSearchOptions;

export type ScrapedSearchTorrent = {
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
    published: string;
    // size: string;
    size: NyaaTorrentSize;
    seeders: number;
    timestamp: number;
    title: string;
}


export type NyaaScrapeTorrentOptions = {
    id: number;
    isSukebei?: false;
}

export type SukebeiScrapeTorrentOptions = {
    id: number;
    isSukebei: true;
}

export type ScrapeTorrentOptions = NyaaScrapeTorrentOptions | SukebeiScrapeTorrentOptions;

export type ScrapedTorrentFile = {
    name: string;
    size: NyaaTorrentSize;
}

export type ScrapedTorrentFolder = {
    name: string;
    files: (ScrapedTorrentFile|ScrapedTorrentFolder)[];
}

export type ScrapedTorrentComment = {
    content: string;
    published: string;
    timestamp: number;
    user: string;
}

export type ScrapedTorrent = {
    category: NyaaSubcategoryTitle | SukebeiSubcategoryTitle;
    categoryId: NyaaSubcategoryId | SukebeiSubcategoryId;
    comments: ScrapedTorrentComment[];
    description?: string;
    /** Defaults to `-1` if not available. */
    downloads: number;
    files: (ScrapedTorrentFile|ScrapedTorrentFolder)[];
    hash: string;
    information?: string;
    isRemake: boolean;
    isTrusted: boolean;
    isTrustedUser: boolean;
    link?: string;
    /** Defaults to `-1` if not available. */
    leechers: number;
    magnet?: string;
    published: string;
    /** Defaults to `-1` if not available. */
    seeders: number;
    size: NyaaTorrentSize;
    timestamp: number;
    title: string;
    user: string;
}
