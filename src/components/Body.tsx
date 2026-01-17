import { Sidebar } from "@/components/Sidebar.tsx";

export type BodyProps = {
    children?: React.ReactNode;
}

const jsFiles = [
    "basecoat.js",
    "basecoat-defaults.js",
    "sidebar.js",
];

export const Body = ({
    children,
}: BodyProps) => {
    return (
        <body>
            <Sidebar />
            <main>
                {children}
                <button type="button" id="toggle-sidebar-btn" className="btn hidden">
                    Toggle Sidebar
                </button>
            </main>
            {jsFiles.map((file) => (
                <script key={file} src={`/public/js/${file}`}></script>
            ))}
        </body>
    );
}
