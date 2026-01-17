export type BodyProps = {
    children?: React.ReactNode;
}

export const Body = ({
    children,
}: BodyProps) => {
    return (
        <body>
            <main>
                {children}
            </main>
        </body>
    );
}
