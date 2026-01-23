import type { ReactNode, ComponentPropsWithoutRef } from "react";

export type NeutralBadgeProps = {
    children: ReactNode;
    href?: string;
} & ComponentPropsWithoutRef<'span'>;

export const NeutralBadge = ({ color, children, href, ...props }: NeutralBadgeProps) => {
    const className = `badge-secondary border-neutral-800 hover:border-neutral-500 bg-neutral-800 hover:bg-neutral-700`;

    if (href) {
        return (
            <a href={href} {...props}>
                <span className={className}>
                    {children}
                </span>
            </a>
        );
    }
    return (
        <span className={`${className} cursor-default`} {...props}>
            {children}
        </span>
    );
}
