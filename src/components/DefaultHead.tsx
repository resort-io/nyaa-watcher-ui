export type HeadProps = {
    title?: string;
    children?: React.ReactNode;
}

export const DefaultHead = ({
    title,
    children,
}: HeadProps) => {
    return (
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {title && <title>{title}</title>}

            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" crossOrigin="anonymous" />
            <link rel="stylesheet" href="/public/css/styles.css"/>

            <script src="/public/js/htmx.js"></script>
            <script src="/public/js/htmx-helpers.js"></script>

            {children}
        </head>
    );
}
