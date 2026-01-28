import { ArrowUpToLineIcon } from "@/components/icons/ArrowUpToLineIcon.tsx";

export type SearchPaginationProps = {
    backToTopButton?: boolean;
    children: React.ReactNode;
    resultCount: number;
};

export const SearchPagination = ({ backToTopButton = true, children, resultCount = 0 }: SearchPaginationProps) => {
    const lastPage = Math.ceil(resultCount / 75);

    return (
        <section className={`w-full flex align-between scroll-mt-14`}>
            <div className={`flex-1 flex items-center gap-3`}>
                {backToTopButton && (
                    <a href={'#'}>
                        <button
                            data-tooltip="Back to Top"
                            className={`search-pagination-goto-page-btn btn-outline border-neutral-600 hover:border-neutral-500 bg-neutral-800 hover:bg-neutral-700 text-neutral-100`}
                        >
                            <ArrowUpToLineIcon size={4} className={``} strokeWidth={2.5} />
                        </button>
                    </a>
                )}

                <p className={`text-sm text-neutral-400`}>
                    <span className={`font-semibold text-neutral-100`}>
                        {resultCount >= 1000 ? '+1000' : resultCount}
                    </span>
                    {resultCount === 1 ? ' result' : ' results'}

                    <span className={`font-semibold text-neutral-100 ml-3`}>
                        {lastPage >= 14 ? '+14' : lastPage}
                    </span>
                    {lastPage === 1 ? ' page' : ' pages'}
                </p>
            </div>

            <nav
                role="navigation"
                aria-label="pagination"
                className="flex justify-center"
            >
                <ul className="flex flex-row items-center gap-1">
                    {children}
                </ul>
            </nav>

            <div className={`flex-1 flex justify-end gap-2`}>
                <input
                    className={`search-pagination-goto-page-input input max-w-18`}
                    id="search-page-input"
                    type="text"
                    placeholder="Page #"
                />
                <button className={`search-pagination-goto-page-btn btn-outline border-neutral-600 hover:border-neutral-500 bg-neutral-800 hover:bg-neutral-700`}>
                    Go
                </button>
            </div>
        </section>
    );
}
