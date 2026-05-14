(function () {
    'use strict';

    function blockDistractingPages() {
        const path = location.pathname;
        // Redirect Shorts to the regular watch page
        const shortsMatch = path.match(/^\/shorts\/([^/?#]+)/);
        if (shortsMatch) {
            location.replace('https://www.youtube.com/watch?v=' + shortsMatch[1]);
            return;
        }
        // Redirect Playables to homepage
        if (path === '/playables' || path.startsWith('/playables/')) {
            location.replace('https://www.youtube.com/');
        }
    }

    const HIDE_CSS = `
        /* Shorts shelf on homepage and search */
        ytd-reel-shelf-renderer,
        ytd-reel-item-renderer,
        /* Shorts tab in search results */
        [title="Shorts"],
        /* Shorts in recommendations sidebar */
        ytd-compact-video-renderer a[href*="/shorts/"],
        ytd-video-renderer a[href*="/shorts/"],
        ytd-rich-item-renderer a[href*="/shorts/"],
        /* Shorts nav entry in guide sidebar */
        ytd-guide-entry-renderer a[href="/shorts"],
        ytd-mini-guide-entry-renderer a[href="/shorts"],
        /* Playables nav entry in guide sidebar */
        ytd-guide-entry-renderer a[href="/playables"],
        ytd-mini-guide-entry-renderer a[href="/playables"],
        /* Playables shelf on homepage */
        ytd-rich-section-renderer:has(a[href*="/playables"]),
        ytd-game-card-renderer,
        ytd-games-shelf-renderer {
            display: none !important;
        }
        /* Hide the parent card when the link is a Shorts link */
        ytd-rich-item-renderer:has(a[href*="/shorts/"]),
        ytd-video-renderer:has(a[href*="/shorts/"]),
        ytd-compact-video-renderer:has(a[href*="/shorts/"]) {
            display: none !important;
        }
    `;

    function injectStyles() {
        if (document.getElementById('yt-blocker-style')) return;
        const style = document.createElement('style');
        style.id = 'yt-blocker-style';
        style.textContent = HIDE_CSS;
        (document.head || document.documentElement).appendChild(style);
    }

    function init() {
        blockDistractingPages();
        injectStyles();
    }

    // Run immediately and also after SPA navigations
    init();

    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            blockDistractingPages();
        }
    }).observe(document, { subtree: true, childList: true });
})();
