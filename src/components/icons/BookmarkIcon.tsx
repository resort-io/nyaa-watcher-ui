import type { IconProps } from "@/types";

export type BookmarkIconProps = {
    type?: 'solid' | 'outline';
} & IconProps;

export const BookmarkIcon = ({ size, strokeWidth, className, type, ...props }: BookmarkIconProps) => {
    if (type === 'solid') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`size-${size ?? 4}${className ? ` ${className}` : ''}`}
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={strokeWidth ?? 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`size-${size ?? 4}${className ? ` ${className}` : ''}`}
            {...props}
        >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
    );
}
