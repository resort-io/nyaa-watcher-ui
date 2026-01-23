import { describe, expect, it } from 'bun:test';
import { scrapeSearchPage } from "@/lib/scrape/search-page";
import { scrapeTorrentPage } from "@/lib/scrape/torrent-page";

describe('scrapeSearchPage', () => {
    it('default', async () => {
        const result = await scrapeSearchPage({});

        // console.log(`result length: ${result.length}`);
        // console.log(result[0]);
        expect(result.length).toEqual(75);
    });
});

describe('scrapeTorrentPage', () => {
    it('default', async () => {
        const result = await scrapeTorrentPage({
            id: 2056758,
        });

        console.log('result:', result);
        // console.log('result files:', JSON.stringify(result?.files));

        // expect(result).toEqual();
    });
});
