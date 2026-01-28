import type { ReactNode, ComponentPropsWithoutRef } from "react";

export type NeutralBadgeProps = {
    children: ReactNode;
    href?: string;
} & ComponentPropsWithoutRef<'span'>;

export const NeutralBadge = ({ className, color, children, href, ...props }: NeutralBadgeProps) => {
    const classes = `badge-secondary border-neutral-800 hover:border-neutral-500 bg-neutral-800 hover:bg-neutral-700 ${className}`;

    if (href) {
        return (
            <a href={href} {...props}>
                <span className={classes}>
                    {children}
                </span>
            </a>
        );
    }
    return (
        <span className={`${classes} cursor-default`} {...props}>
            {children}
        </span>
    );
}
