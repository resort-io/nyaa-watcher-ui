import type { ComponentPropsWithoutRef } from "react";
import type { ScrapedSearchPageTorrent } from "@/types/scraping.ts";
import { RemakeBadge } from "@/components/badges/RemakeBadge.tsx";
import { TrustedBadge } from "@/components/badges/TrustedBadge.tsx";
import { ServerIcon } from "@/components/icons/ServerIcon.tsx";
import { CalendarIcon } from "@/components/icons/CalendarIcon.tsx";
import { DownloadIcon } from "@/components/icons/DownloadIcon.tsx";
import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon.tsx";
import { ArrowUpIcon } from "@/components/icons/ArrowUpIcon.tsx";
import { CommentIcon } from "@/components/icons/CommentIcon.tsx";
import { MagnetIcon } from "@/components/icons/MagnetIcon.tsx";
import { ChainIcon } from "@/components/icons/ChainIcon.tsx";
import { NeutralBadge } from "@/components/badges/NeutralBadge.tsx";
import { ColorBadge } from "@/components/badges/ColorBadge.tsx";
import { BookmarkIcon } from "@/components/icons/BookmarkIcon.tsx";
import { CirclePlusIcon } from "@/components/icons/CirclePlusIcon.tsx";
import { TorrentItemButton } from "@/components/TorrentItemButton.tsx";

export type TorrentItemProps = {
    torrent: ScrapedSearchPageTorrent;
} & ComponentPropsWithoutRef<'article'>;

export const TorrentItem = ({ torrent, ...props }: TorrentItemProps) => {
    return (
        <article
            className="group/item flex items-center border-2 text-sm rounded-md border-border p-4 gap-4 bg-neutral-900 hover:border-neutral-700 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            data-torrent-id={torrent.id}
            {...props}
        >
            <img
                src="https://github.com/hunvreus.png"
                alt="hunvreus"
                className="h-16.5 w-16.5 rounded object-cover"
            />

            <div className="flex flex-1 flex-col gap-0.5">
                {/* Title */}
                <div className="flex items-center gap-2">
                    <h3
                        className="flex w-fit items-center gap-2 text-sm leading-snug font-medium hover:underline hover:text-sky-400 tracking-tight"
                        data-alt-title={torrent.originalTitle}
                    >
                        <a href="#">
                            {torrent.title}
                        </a>
                    </h3>
                    {torrent.isTrusted && (
                        <TrustedBadge data-tooltip="Uploaded by a Trusted User" />
                    )}
                    {torrent.isRemake && (
                        <RemakeBadge data-tooltip="Torrent is a Remake or Reupload" />
                    )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 text-muted-foreground text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4">

                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-xs">
                        <p className="inline-flex items-center gap-1">
                            <ServerIcon className="h-3 w-3 shrink-0" />
                            <span className="torrent-item-size text-white">
                                {torrent.size}
                            </span>
                        </p>

                        <p className="inline-flex items-center gap-1">
                            <CalendarIcon className="h-3 w-3 shrink-0 mb-px"/>
                            <span
                                className={`torrent-item-published-date`}
                                data-timestamp={torrent.timestamp}
                                data-published={torrent.published}
                            >
                                {/* TODO: Convert to local timezone */}
                                {torrent.published}
                            </span>
                        </p>

                        <p data-tooltip="Seeders" className="inline-flex items-center gap-0.5 text-green-500">
                            <ArrowUpIcon className="h-3 w-3 shrink-0 mb-px"/>
                            <span className={`torrent-item-seeders-num`}>
                                {torrent.seeders}
                            </span>
                        </p>

                        <p data-tooltip="Leechers" className="inline-flex items-center gap-0.5 text-red-500">
                            <ArrowDownIcon className="h-3 w-3 shrink-0 mb-px"/>
                            <span className={`torrent-item-leechers-num`}>
                                {torrent.leechers}
                            </span>
                        </p>

                        <p data-tooltip="Downloads" className="inline-flex items-center gap-0.5">
                            <DownloadIcon className="h-3 w-3 shrink-0"/>
                            <span className={`torrent-item-downloads-num`}>
                                {torrent.downloads}
                            </span>
                        </p>

                        {torrent.comments > 0 && (
                            <p data-tooltip="Comments" className="inline-flex items-center gap-1">
                                <CommentIcon className="h-3 w-3 shrink-0"/>
                                <span className={`torrent-item-comments-num`}>
                                    {torrent.comments}
                                </span>
                            </p>
                        )}
                    </div>

                    {/* Tags */}
                    <p className="flex gap-1 text-muted-foreground line-clamp-2 text-sm leading-normal font-normal">
                        {torrent.userTag && (
                            <ColorBadge color={'sky'} href={'#'} className={`torrent-item-user-tag rounded`}>
                                {torrent.userTag}
                            </ColorBadge>
                        )}
                        {torrent.tags && (
                            torrent.tags.map((tag, index) => (
                                <NeutralBadge key={index} href={'#'} className={`torrent-item-tag rounded`}>
                                    {tag}
                                </NeutralBadge>
                            ))
                        )}
                        {!torrent.tags && !torrent.userTag && (
                            <span className={`badge-secondary border border-neutral-600 bg-neutral-800`}>
                                No Tags
                            </span>
                        )}
                    </p>
                </div>
            </div>

            {/* Queue Button */}
            <TorrentItemButton
                className={`torrent-item-queue-btn`}
                color="sky"
                disabled={!torrent.downloadLink}
                tooltip={torrent.downloadLink ? `Add to Download Queue` : `Torrent Unavailable`}
            >
                <CirclePlusIcon size={4} className="mr-1 mt-px" strokeWidth={2} />
                Queue
            </TorrentItemButton>

            {/* Save to List Button */}
            <TorrentItemButton
                className={`torrent-item-save-btn`}
                tooltip={`Save to List...`}
            >
                <BookmarkIcon size={3.5} strokeWidth={2} type={'solid'}/>
            </TorrentItemButton>

            {/* Directly Download Button */}
            <TorrentItemButton
                className={`torrent-item-download-btn`}
                disabled={!torrent.downloadLink}
                tooltip={torrent.downloadLink ? `Download Torrent File` : `Torrent Unavailable`}
                data-download-link={torrent.downloadLink}
            >
                <DownloadIcon size={4} strokeWidth={2.5} />
            </TorrentItemButton>

            {/* Copy Torrent Link Button */}
            <TorrentItemButton
                className={`torrent-item-copy-download-btn`}
                disabled={!torrent.downloadLink}
                tooltip={torrent.downloadLink ? `Copy Download Link` : `Download Link Unavailable`}
                data-download-link={torrent.downloadLink}
            >
                <ChainIcon size={3}/>
            </TorrentItemButton>

            {/* Copy Magnet Link Button */}
            <TorrentItemButton
                className={`torrent-item-copy-magnet-btn`}
                disabled={!torrent.magnetLink}
                tooltip={torrent.magnetLink ? `Copy Magnet Link` : `Magnet Link Unavailable`}
                data-magnet-link={torrent.magnetLink}
            >
                <MagnetIcon size={3} strokeWidth={1.5}/>
            </TorrentItemButton>
        </article>
    );
}
