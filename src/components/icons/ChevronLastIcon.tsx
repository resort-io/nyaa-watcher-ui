import type { IconProps } from "@/types";

export const ChevronLastIcon = ({ size, strokeWidth, className, ...props }: IconProps) => (
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
        className={`lucide lucide-chevron-last-icon lucide-chevron-last size-${size ?? 4}${className ? ` ${className}` : ''}`}
        {...props}
    >
        <path d="m7 18 6-6-6-6"/>
        <path d="M17 6v12"/>
    </svg>
)
