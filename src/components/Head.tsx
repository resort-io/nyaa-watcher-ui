export type HeadProps = {
    title?: string;
    children?: React.ReactNode;
}

export const Head = ({
    title,
    children,
}: HeadProps) => {
    return (
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {title && <title>{title}</title>}
            <script src="/public/js/htmx.js"></script>
            <script src="/public/js/htmx-helpers.js"></script>
            {children}
        </head>
    );
}
