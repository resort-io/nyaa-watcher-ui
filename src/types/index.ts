import type { ComponentPropsWithoutRef } from "react";

export type IconProps = {
    size?: number;
} & ComponentPropsWithoutRef<'svg'>;
