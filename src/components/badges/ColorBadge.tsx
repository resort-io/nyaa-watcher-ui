import type { ReactNode, ComponentPropsWithoutRef } from "react";

export type ColorBadgeProps = {
    color: 'neutral' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
    children: ReactNode;
    href?: string;
} & ComponentPropsWithoutRef<'span'>;

export const ColorBadge = ({ color, children, href, ...props }: ColorBadgeProps) => {
    const className = `badge-secondary border border-${color}-500 hover:border-${color}-400 bg-${color}-900 hover:bg-${color}-800`;

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
