import type { ComponentPropsWithoutRef } from "react"

export type SelectInputOptionProps = {
    children: React.ReactNode;
    dataValue: string | number;
    groupNum: string | number;
    itemNum: string | number;
    selectID: string;
} & ComponentPropsWithoutRef<'div'>;

export const SelectInputOption = ({ children, dataValue, groupNum, itemNum, selectID, ...props }: SelectInputOptionProps) => {
    return (
        <div
            id={`group-label-${selectID}-items-${groupNum}-${itemNum}`}
            role="option"
            data-value={dataValue}
            {...props}
        >
            {children}
        </div>
    );
}
