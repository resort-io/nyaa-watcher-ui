export type PageHeaderProps = {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
    <header className="space-y-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
            {title}
        </h1>
        {subtitle && (
            <p className="text-muted-foreground">
                {subtitle}
            </p>
        )}
    </header>
)
