// 'Add to Queue' Buttons
document.querySelectorAll('.torrent-item-save-btn').forEach((element) => {
    element.addEventListener('click', async (event) => {
        event.preventDefault();
        // TODO
    });
});

// 'Save to List' Buttons
document.querySelectorAll('.torrent-item-save-btn').forEach((element) => {
    element.addEventListener('click', async (event) => {
        event.preventDefault();
        // TODO
    });
});

// 'Download Torrent File' Buttons
document.querySelectorAll('.torrent-item-download-btn').forEach((element) => {
    element.addEventListener('click', async (event) => {
        event.preventDefault();
        const wrapperEl = element.parentElement;
        try {
            const downloadLink = element.getAttribute('data-download-link');
            window.open(downloadLink, '_blank', 'noopener,noreferrer');

            const originalTooltip = wrapperEl.getAttribute('data-tooltip');
            wrapperEl.setAttribute('data-tooltip', 'Downloading...');

            const resetTooltip = () => {
                setTimeout(() => {
                    wrapperEl.setAttribute('data-tooltip', originalTooltip);
                }, 75);
                element.removeEventListener('mouseleave', resetTooltip);
            };
            element.addEventListener('mouseleave', resetTooltip);
        } catch (err) {
            const torrentID = wrapperEl.parentElement.getAttribute('data-torrent-id');
            console.error(`[Error] Failed to copy link for torrent ID: ${torrentID}`, err);
        }
    });
});

// 'Copy Download Link' and 'Copy Magnet Link' Buttons
document.querySelectorAll('.torrent-item-copy-download-btn:not([disabled]), .torrent-item-copy-magnet-btn:not([disabled])').forEach((element) => {
    element.addEventListener('click', async (event) => {
        event.preventDefault();
        const wrapperEl = element.parentElement;
        try {
            const link = element.classList.contains('torrent-item-copy-download-btn')
                ? element.getAttribute('data-download-link')
                : element.getAttribute('data-magnet-link');
            await navigator.clipboard.writeText(link);

            const originalTooltip = wrapperEl.getAttribute('data-tooltip');
            wrapperEl.setAttribute('data-tooltip', 'Copied to Clipboard!');

            const resetTooltip = () => {
                setTimeout(() => {
                    wrapperEl.setAttribute('data-tooltip', originalTooltip);
                }, 75);
                element.removeEventListener('mouseleave', resetTooltip);
            };
            element.addEventListener('mouseleave', resetTooltip);
        } catch (err) {
            const torrentID = wrapperEl.parentElement.getAttribute('data-torrent-id');
            console.error(`[Error] Failed to copy link for torrent ID: ${torrentID}`, err);
        }
    });
});

/**
 * Get torrent information from a torrent element.
 * @param {Element} torrentElement - The torrent item element to extract information from (see `TorrentItem` component).
 * @returns {ScrapedSearchPageTorrent}
 */
const getTorrentInfo = (torrentElement) => {
    // TODO
};
