import type { ComponentPropsWithoutRef } from "react";

export type TorrentItemButtonProps = {
    children: React.ReactNode;
    color?: 'neutral' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
    tooltip?: string;
} & ComponentPropsWithoutRef<'button'>;

export const TorrentItemButton = ({ children, className, color = 'neutral', tooltip, ...props }: TorrentItemButtonProps) => {
    return (
        <span data-tooltip={tooltip}>
            <button
                className={`btn-icon-outline w-fit pl-2.5 pr-2.5 border-${color}-600 hover:border-${color}-500 bg-${color}-800 hover:bg-${color}-700 ${className}`}
                {...props}
            >
                {children}
            </button>
        </span>
    );
}
