export type BodyProps = {
    children?: React.ReactNode;
}

export const Body = ({
    children,
}: BodyProps) => {
    return (
        <body>
            {children}

            <script src="/public/js/basecoat.js"></script>
            <script src="/public/js/basecoat-defaults.js"></script>
        </body>
    );
}
