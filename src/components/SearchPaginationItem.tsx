import type { ComponentPropsWithoutRef } from "react"

export type SearchPaginationItemProps = {
    children: React.ReactNode;
    href?: string;
    isDisabled?: boolean;
    tooltip?: string;
} & ComponentPropsWithoutRef<'li'>;

export const SearchPaginationItem = ({ children, href, isDisabled, tooltip, ...props }: SearchPaginationItemProps) => {
    if (href) {
        return (
            <li {...props} data-tooltip={tooltip}>
                <a
                    href={isDisabled ? undefined : href}
                    className={`btn-ghost ${isDisabled ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}`}
                    aria-disabled={isDisabled}
                    tabIndex={isDisabled ? -1 : undefined}
                >
                    {children}
                </a>
            </li>
        );
    }
    return (
        <li {...props} data-tooltip={tooltip}>
            <span
                className={`btn-ghost cursor-default ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : undefined}
            >
                {children}
            </span>
        </li>
    );
}
