import type { IconProps } from "@/types";

export const MagnetIcon = ({ size, strokeWidth, className, ...props }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="200"
        height="200"
        viewBox="0 0 1024 1024"
        strokeWidth={strokeWidth ?? 2}
        stroke="currentColor"
        className={`size-${size ?? 4}${className ? ` ${className}` : ''}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            fill="currentColor"
            d="m731 768l37-256q0-133-61.5-194.5T512 256t-194.5 61.5T256 512l37 256H37L0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199l-37 256H731zm-429 64l18 128q0 26-37.5 45t-90.5 19t-90.5-19T64 960L46 832h256zm676 0l-18 128q0 26-37.5 45t-90.5 19t-90.5-19t-37.5-45l18-128h256z"
        />
    </svg>
)
