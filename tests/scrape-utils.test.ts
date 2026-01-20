import { describe, expect, it } from 'bun:test';
import { getTorrentUserTag, getTorrentTags, removeTagsFromTitle } from "@/lib/scrape/utils.ts";

describe('scrape utils: getTorrentUserTag', () => {
    it('one user tag + many torrent tags', async () => {
        const title = "[Uploader] TEST TITLE - S01E01 [1080p][HEVC x265 10bit][Multi-Subs] (Weekly)";
        const result = getTorrentUserTag(title);
        expect(result).toEqual("Uploader");
    });

    it('many torrent tags', async () => {
        const title = "TEST TITLE - S01E01 [1080p][HEVC x265 10bit][Multi-Subs] (Weekly)";
        const result = getTorrentUserTag(title);
        expect(result).toEqual("");
    });

    it('one user tag', async () => {
        const title = "[Uploader] TEST TITLE - S01E01 (Weekly)";
        const result = getTorrentUserTag(title);
        expect(result).toEqual("Uploader");
    });

    it('one torrent tag', async () => {
        const title = "TEST TITLE - S01E01 [1080p] (Weekly)";
        const result = getTorrentUserTag(title);
        expect(result).toEqual("");
    });
});

describe('scrape utils: getTorrentTags', () => {
    it('one user tag + many torrent tags', async () => {
        const title = "[Uploader] TEST TITLE - S01E01 [1080p][HEVC x265 10bit][Multi-Subs] (Weekly)";
        const result = getTorrentTags(title);
        expect(result).toEqual(["1080p", "HEVC x265 10bit", "Multi-Subs"]);
    });

    it('one user tag', async () => {
        const title = "[Uploader] TEST TITLE - S01E01 (Weekly)";
        const result = getTorrentTags(title);
        expect(result).toEqual([]);
    });

    it('one torrent tag', async () => {
        const title = "TEST TITLE - S01E01 [1080p] (Weekly)";
        const result = getTorrentTags(title);
        expect(result).toEqual(["1080p"]);
    });

    it('many torrent tags', async () => {
        const title = "TEST TITLE - S01E01 [1080p][HEVC x265 10bit][Multi-Subs] (Weekly)";
        const result = getTorrentTags(title);
        expect(result).toEqual(["1080p", "HEVC x265 10bit", "Multi-Subs"]);
    });
});

describe('scrape utils: removeTagsFromTitle', () => {
    it('one user tag + many torrent tags', async () => {
        const title = "[Uploader] TEST TITLE - S01E01 [1080p][HEVC x265 10bit][Multi-Subs] (Weekly)";
        const result = removeTagsFromTitle(title);
        expect(result).toEqual("TEST TITLE - S01E01 (Weekly)");
    });

    it('one user tag', async () => {
        const title = "[Uploader] TEST TITLE - S01E01 (Weekly)";
        const result = removeTagsFromTitle(title);
        expect(result).toEqual("TEST TITLE - S01E01 (Weekly)");
    });

    it('one torrent tag', async () => {
        const title = "TEST TITLE - S01E01 [1080p] (Weekly)";
        const result = removeTagsFromTitle(title);
        expect(result).toEqual("TEST TITLE - S01E01 (Weekly)");
    });

    it('many torrent tags', async () => {
        const title = "TEST TITLE - S01E01 [1080p][HEVC x265 10bit][Multi-Subs] (Weekly)";
        const result = removeTagsFromTitle(title);
        expect(result).toEqual("TEST TITLE - S01E01 (Weekly)");
    });
});
