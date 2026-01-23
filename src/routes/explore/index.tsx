import type { FastifyPluginCallback } from "fastify";
import { PageHeader } from "@/components/PageHeader.tsx";
import { TorrentItem } from "@/components/TorrentItem.tsx";
import type { ScrapedSearchPageTorrent } from "@/types/scraping.ts";

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
    tags: [ "1080p CR WEB-DL AVC AAC", "MultiSub", "5DD01281" ],
    seeders: 1179,
    timestamp: 1766342077,
    title: "One Punch Man (2025) - 11 (REPACK)",
    userTag: "Erai-raws",
}

export const exploreRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/explore", async (_req, res) => {
        res.setTitle("Explore - Nyaa Watcher");
        return res.send(<>
            <PageHeader
                title='Explore'
                subtitle='Discover new and trending torrents here.'
            />

            <div className="flex flex-col gap-2">
                <TorrentItem {...testTorrent} />
                <TorrentItem {...testTorrent} />
                <TorrentItem {...testTorrent} />
                <TorrentItem {...testTorrent} />
            </div>
        </>);
    });
}
