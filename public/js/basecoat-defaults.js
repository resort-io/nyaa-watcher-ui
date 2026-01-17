if (!document || typeof document === "undefined") {
    throw new Error("basecoat-defaults.js can only be run in a browser");
}

/* sidebar */
const toggleSidebarButton = document.querySelector("#toggle-sidebar-btn");
if (toggleSidebarButton) {
    toggleSidebarButton.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("basecoat:sidebar"));
    });
}

/* theme */
(() => {
    try {
        const stored = localStorage.getItem("themeMode");
        if (
            stored
                ? stored === "dark"
                : matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.add("dark");
        }
    } catch (_) {}

    const apply = (dark) => {
        document.documentElement.classList.toggle("dark", dark);
        try {
            localStorage.setItem("themeMode", dark ? "dark" : "light");
        } catch (_) {}
    };

    document.addEventListener("basecoat:theme", (event) => {
        const mode = event.detail?.mode;
        apply(
            mode === "dark"
                ? true
                : mode === "light"
                    ? false
                    : !document.documentElement.classList.contains("dark"),
        );
    });
})();

const toggleThemeButton = document.querySelector("#toggle-theme-btn");
if (toggleThemeButton) {
    toggleThemeButton.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("basecoat:theme"));
    });
}
