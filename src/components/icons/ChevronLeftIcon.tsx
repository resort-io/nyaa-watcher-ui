import type { IconProps } from "@/types";

export const ChevronLeftIcon = ({ size, strokeWidth, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-chevron-left-icon lucide-chevron-left size-${size ?? 4}${className ? ` ${className}` : ''}`}
        {...props}
    >
        <path d="m15 18-6-6 6-6"/>
    </svg>
)
