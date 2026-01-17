import { Sidebar } from "@/components/Sidebar.tsx";

export type BodyProps = {
    children?: React.ReactNode;
}

export const Body = ({
    children,
}: BodyProps) => {
    return (
        <body>
            <Sidebar />
            <main>
                {children}
            </main>
            <script src="/public/js/basecoat.js"></script>
            <script src="/public/js/basecoat-defaults.js"></script>
        </body>
    );
}
