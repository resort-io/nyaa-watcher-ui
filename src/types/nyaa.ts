import { NYAA_FILTERS, NYAA_CATEGORIES, SUKEBEI_CATEGORIES } from "@/lib/constants";

export type NyaaTorrentSize = `${number} ${'Bytes' | 'KiB' | 'MiB' | 'GiB' | 'TiB'}`;

export type NyaaFilter = typeof NYAA_FILTERS[number];
export type NyaaFilterId = NyaaFilter['id'];
export type NyaaFilterTitle = NyaaFilter['title'];

export type NyaaCategory = typeof NYAA_CATEGORIES[number];
export type NyaaCategoryId = NyaaCategory['id'];
export type NyaaCategoryTitle = NyaaCategory['title'];
export type NyaaSubcategoryId = Exclude<NyaaCategoryId, '0_0' | '1_0' | '2_0' | '3_0' | '4_0' | '5_0' | '6_0'>;
export type NyaaSubcategoryTitle = Exclude<NyaaCategoryTitle, 'All' | 'Anime' | 'Audio' | 'Manga' | 'Live Action' | 'Pictures' | 'Software' | 'Art' | 'Real Life'>;

export type SukebeiCategory = typeof SUKEBEI_CATEGORIES[number];
export type SukebeiCategoryId = SukebeiCategory['id'];
export type SukebeiCategoryTitle = SukebeiCategory['title'];
export type SukebeiSubcategoryId = Exclude<SukebeiCategoryId, '0_0' | '1_0' | '2_0'>;
export type SukebeiSubcategoryTitle = Exclude<SukebeiCategoryTitle, 'All' | 'Art' | 'Real Life'>;
