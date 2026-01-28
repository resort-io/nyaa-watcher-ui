import type { IconProps } from "@/types";

export const ChevronsRightIcon = ({ size, strokeWidth, className, ...props }: IconProps) => (
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
        className={`lucide lucide-chevrons-right-icon lucide-chevrons-right size-${size ?? 4}${className ? ` ${className}` : ''}`}
        {...props}
    >
        <path d="m6 17 5-5-5-5"/>
        <path d="m13 17 5-5-5-5"/>
    </svg>
)
