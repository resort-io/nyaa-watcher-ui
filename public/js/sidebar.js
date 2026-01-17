const highlightActiveSidebarItem = () => {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.sidebar nav a');

    sidebarLinks.forEach((link) => {
        const href = link.getAttribute('href');

        // skip external links
        if (!href || href.startsWith('http')) {
            return;
        }

        // Check if the current path matches the link href
        // For home page, exact match is required
        // For other pages, check if the path starts with the href (for nested routes)
        const isActive = href === '/'
            ? currentPath === '/'
            : currentPath === href || currentPath.startsWith(href + '/');

        if (isActive) {
            link.setAttribute('data-active', 'true');
        } else {
            link.removeAttribute('data-active');
        }
    });
}

// run on page load
document.addEventListener('DOMContentLoaded', highlightActiveSidebarItem);

// run if DOM is already loaded
if (document.readyState !== 'loading') {
    highlightActiveSidebarItem();
}
