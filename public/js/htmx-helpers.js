document.addEventListener("htmx:afterRequest", (event) => {
    const xhr = event.detail.xhr;
    if (xhr) {
        const pageTitle = xhr.getResponseHeader("x-page-title");
        if (pageTitle) {
            document.title = pageTitle;
        }
    }
});
