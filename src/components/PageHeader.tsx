import type { ReactNode } from "react";

export type PageHeaderProps = {
    children: ReactNode;
    subtitle?: string;
}

export const PageHeader = ({ children, subtitle }: PageHeaderProps) => (
    <header className="space-y-2 flex gap-2 mt-2 mb-3">
        <h1 className="text-3xl font-semibold tracking-tight">
            {children}
        </h1>
        {subtitle && (
            <p className="text-muted-foreground">
                {subtitle}
            </p>
        )}
    </header>
)
