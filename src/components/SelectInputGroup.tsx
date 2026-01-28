import type { ComponentPropsWithoutRef } from "react"

export type SelectInputGroupProps = {
    children: React.ReactNode;
    groupNum: string | number;
    selectID: string;
    title?: string;
} & ComponentPropsWithoutRef<'div'>;

export const SelectInputGroup = ({ children, groupNum, selectID, title, ...props }: SelectInputGroupProps) => {
    return (
        <div
            role="group"
            aria-labelledby={`group-label-${selectID}-items-${groupNum}`}
            {...props}
        >
            {title && (
                <div role="heading" id={`group-label-${selectID}-items-${groupNum}`}>
                    {title}
                </div>
            )}
            {children}
        </div>
    );
}
