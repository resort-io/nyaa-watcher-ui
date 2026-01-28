import type { FastifyPluginCallback } from "fastify";
import { PageHeader } from "@/components/PageHeader.tsx";
import { TorrentItem } from "@/components/TorrentItem.tsx";
import type { ScrapedSearchPageTorrent } from "@/types/scraping.ts";
import { MagnifyGlassIcon } from "@/components/icons/MagnifyGlassIcon.tsx";
import { NYAA_CATEGORIES, NYAA_FILTERS, SUKEBEI_CATEGORIES } from "@/lib/constants.ts";
import { SelectInput } from "@/components/SelectInput.tsx";
import { SelectInputGroup } from "@/components/SelectInputGroup.tsx";
import { SelectInputOption } from "@/components/SelectInputOption.tsx";
import { FunnelCrossIcon } from "@/components/icons/FunnelCrossIcon.tsx";
import { SearchPagination } from "@/components/SearchPagination.tsx";
import { SearchPaginationItem } from "@/components/SearchPaginationItem.tsx";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon.tsx";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon.tsx";
import { ChevronFirstIcon } from "@/components/icons/ChevronFirstIcon.tsx";
import { ChevronLastIcon } from "@/components/icons/ChevronLastIcon.tsx";

const testTorrent: ScrapedSearchPageTorrent = {
    category: "Anime - English-Translated",
    categoryId: "1_2",
    comments: 23,
    downloads: 17674,
    id: 2056758,
    isRemake: false,
    isTrusted: true,
    leechers: 12,
    downloadLink: "https://nyaa.si/download/2056758.torrent",
    magnetLink: "magnet:?xt=urn:btih:EXAMPLEHASH&dn=Example+Torrent+Title",
    originalTitle: "[Erai-raws] One Punch Man (2025) - 11 (REPACK) [1080p CR WEB-DL AVC AAC][MultiSub][5DD01281]",
    published: "2025-12-21 18:34 UTC",
    size: "1.4 GiB",
    seeders: 1179,
    tags: [ "1080p CR WEB-DL AVC AAC", "MultiSub", "5DD01281" ],
    timestamp: 1766342077,
    title: "One Punch Man (2025) - 11 (REPACK)",
    userTag: "Erai-raws",
}

export const exploreRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/explore", async (_req, res) => {
        res.setTitle("Explore - Nyaa Watcher");
        return res.send(<div className={`flex flex-col gap-4`}>
            <PageHeader>
                Explore
            </PageHeader>

            <section className={`w-full rounded-lg border scroll-mt-14 bg-neutral-900`}>
                {/* Search Bar */}
                <div className="grid gap-3">
                    <div className={`px-4 pt-4 flex gap-4 items-center justify-between`}>
                        <label htmlFor="explore-search-keywords-input" className="label">Keywords</label>
                    </div>

                    <div className={`border-b px-4 pb-4 flex gap-4 items-center justify-between`}>
                        {/* Search Bar */}
                        <input
                            className={`input h-10 p-3 text-base`}
                            id={`explore-search-keywords-input`}
                            type="text"
                            placeholder="Search torrents by title, tag, or keywords..."
                        />

                        {/* Reset Search Options Button */}
                        <span data-tooltip="Reset Search Options">
                            <button
                                className={`btn-lg-icon-outline px-3 text-base font-semibold w-fit border-neutral-600 hover:border-neutral-500 bg-neutral-800 hover:bg-neutral-700`}
                                id={`explore-search-reset-filters-button`}
                            >
                                <FunnelCrossIcon size={5} className={``} strokeWidth={2}/>
                            </button>
                        </span>

                        {/* Search Button */}
                        <button
                            className={`btn-lg-icon-outline px-4 text-base font-semibold w-fit border-sky-600 hover:border-sky-500 bg-sky-800 hover:bg-sky-700`}
                            id={`explore-search-submit-button`}
                        >
                            <MagnifyGlassIcon size={5} className={`mr-2.5`} strokeWidth={2.5}/>
                            Search
                        </button>
                    </div>
                </div>

                {/* Search Options */}
                <div className={`p-4`}>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4`}>
                        {/* User Option */}
                        <div className={`flex flex-col gap-2`}>
                            <label htmlFor="search-filter-user" className="label">
                                User
                            </label>
                            <input className="input" id="search-filter-user" type="text" placeholder="Username"/>
                        </div>

                        {/* Category Option */}
                        <div className={`flex flex-col gap-2`}>
                            <label htmlFor="search-filter-category" className="label">
                                Category
                            </label>
                            <SelectInput
                                id="search-filter-category"
                                searchable={true}
                                searchIcon={<MagnifyGlassIcon/>}
                                searchPlaceholder="Search categories..."
                                startingValue={`all`}
                            >
                                <SelectInputGroup
                                    selectID="search-filter-category"
                                    groupNum={1}
                                >
                                    <SelectInputOption
                                        dataValue={`all`}
                                        selectID="search-filter-category"
                                        groupNum={1}
                                        itemNum={1}
                                    >
                                        All Categories
                                    </SelectInputOption>
                                </SelectInputGroup>
                                <SelectInputGroup
                                    title="Nyaa Categories"
                                    selectID="search-filter-category"
                                    groupNum={2}
                                >
                                    {NYAA_CATEGORIES.filter(c => c.title !== 'All').map((category, index) => (
                                        <SelectInputOption
                                            dataValue={category.id}
                                            selectID="search-filter-category"
                                            groupNum={2}
                                            itemNum={index + 1}
                                        >
                                            {category.title}
                                        </SelectInputOption>
                                    ))}
                                </SelectInputGroup>
                                <SelectInputGroup
                                    title="Sukebei Categories"
                                    selectID="search-filter-category"
                                    groupNum={3}
                                >
                                    {SUKEBEI_CATEGORIES.filter(c => c.title !== 'All').map((category, index) => (
                                        <SelectInputOption
                                            dataValue={category.id}
                                            selectID="search-filter-category"
                                            groupNum={3}
                                            itemNum={index + 1}
                                        >
                                            {category.title}
                                        </SelectInputOption>
                                    ))}
                                </SelectInputGroup>
                            </SelectInput>
                        </div>

                        {/* Filter Option */}
                        <div className={`flex flex-col gap-2`}>
                            <label htmlFor="search-filter-filter" className="label">
                                Filter
                            </label>
                            <SelectInput id="search-filter-filter" searchable={false} startingValue={0}>
                                <SelectInputGroup selectID="search-filter-filter" groupNum={1}>
                                    <SelectInputOption dataValue={NYAA_FILTERS[0].id} selectID="search-filter-filter"
                                                       groupNum={1} itemNum={1}>
                                        None
                                    </SelectInputOption>
                                    <SelectInputOption dataValue={NYAA_FILTERS[1].id} selectID="search-filter-filter"
                                                       groupNum={1} itemNum={2}>
                                        No Remakes
                                    </SelectInputOption>
                                    <SelectInputOption dataValue={NYAA_FILTERS[2].id} selectID="search-filter-filter"
                                                       groupNum={1} itemNum={3}>
                                        Trusted Only
                                    </SelectInputOption>
                                </SelectInputGroup>
                            </SelectInput>
                        </div>

                        {/* Sort Option */}
                        <div className={`flex flex-col gap-2`}>
                            <label htmlFor="search-filter-sort" className="label">
                                Sort By
                            </label>
                            <SelectInput id="search-filter-sort" searchable={false} startingValue={`date`}>
                                <SelectInputGroup selectID="search-filter-sort" groupNum={1}>
                                    <SelectInputOption selectID="search-filter-sort" dataValue={`comments`} groupNum={1}
                                                       itemNum={1}>
                                        Comments
                                    </SelectInputOption>
                                    <SelectInputOption selectID="search-filter-sort" dataValue={`date`} groupNum={1}
                                                       itemNum={2}>
                                        Date
                                    </SelectInputOption>
                                    <SelectInputOption selectID="search-filter-sort" dataValue={`downloads`}
                                                       groupNum={1} itemNum={3}>
                                        Downloads
                                    </SelectInputOption>
                                    <SelectInputOption selectID="search-filter-sort" dataValue={`leechers`} groupNum={1}
                                                       itemNum={4}>
                                        Leechers
                                    </SelectInputOption>
                                    <SelectInputOption selectID="search-filter-sort" dataValue={`seeders`} groupNum={1}
                                                       itemNum={5}>
                                        Seeders
                                    </SelectInputOption>
                                    <SelectInputOption selectID="search-filter-sort" dataValue={`size`} groupNum={1}
                                                       itemNum={6}>
                                        Size
                                    </SelectInputOption>
                                </SelectInputGroup>
                            </SelectInput>
                        </div>

                        {/* Order Option */}
                        <div className={`flex flex-col gap-2`}>
                            <label htmlFor="search-filter-order" className="label">
                                Order
                            </label>
                            <SelectInput id="search-filter-order" searchable={false} startingValue={`dsc`}>
                                <SelectInputGroup selectID="search-filter-order" groupNum={1}>
                                    <SelectInputOption selectID="search-filter-order" dataValue={`asc`} groupNum={1}
                                                       itemNum={1}>
                                        Ascending
                                    </SelectInputOption>
                                    <SelectInputOption selectID="search-filter-order" dataValue={`dsc`} groupNum={1}
                                                       itemNum={2}>
                                        Descending
                                    </SelectInputOption>
                                </SelectInputGroup>
                            </SelectInput>
                        </div>

                        {/* Source Option */}
                        <div className={`flex flex-col gap-2`}>
                            <label htmlFor="search-filter-user" className="label">
                                Source
                            </label>
                            <fieldset className={`flex gap-2 mt-2`}>
                                <label className="label">
                                    <input type="radio" name="radio-group" value="default" className="input"/>
                                    Nyaa
                                </label>
                                <label className="label">
                                    <input type="radio" name="radio-group" value="comfortable" className="input"
                                           checked/>
                                    Sukebei
                                </label>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </section>

            <SearchPagination resultCount={1000} backToTopButton={false}>
                <SearchPaginationItem href={`#`} tooltip={`First Page`} isDisabled={false}>
                    <ChevronFirstIcon />
                </SearchPaginationItem>
                <SearchPaginationItem href={`#`} tooltip={`Previous Page`} isDisabled={false}>
                    <ChevronLeftIcon />
                </SearchPaginationItem>
                <SearchPaginationItem>
                    {1}
                </SearchPaginationItem>
                <SearchPaginationItem href={`#`} tooltip={`Next Page`} isDisabled={false}>
                    <ChevronRightIcon />
                </SearchPaginationItem>
                <SearchPaginationItem href={`#`} tooltip={`Last Page`} isDisabled={false}>
                    <ChevronLastIcon />
                </SearchPaginationItem>
            </SearchPagination>

            <section className="flex flex-col gap-2">
                {Array.from({ length: 5 }, (_, i) => (
                    <TorrentItem key={i} torrent={testTorrent} />
                ))}
            </section>

            <SearchPagination resultCount={1000}>
                <SearchPaginationItem href={`#`} tooltip={`First Page`} isDisabled={false}>
                    <ChevronFirstIcon />
                </SearchPaginationItem>
                <SearchPaginationItem href={`#`} tooltip={`Previous Page`} isDisabled={false}>
                    <ChevronLeftIcon />
                </SearchPaginationItem>
                <SearchPaginationItem>
                    {1}
                </SearchPaginationItem>
                <SearchPaginationItem href={`#`} tooltip={`Next Page`} isDisabled={false}>
                    <ChevronRightIcon />
                </SearchPaginationItem>
                <SearchPaginationItem href={`#`} tooltip={`Last Page`} isDisabled={false}>
                    <ChevronLastIcon />
                </SearchPaginationItem>
            </SearchPagination>
        </div>);
    });
}
