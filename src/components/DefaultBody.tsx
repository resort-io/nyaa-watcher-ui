import { Sidebar } from "@/components/Sidebar.tsx";

export type BodyProps = {
    children?: React.ReactNode;
}

const jsFiles = [
    "basecoat.js",
    "basecoat-defaults.js",
    "torrent-item.js",
    "sidebar.js",
];

export const DefaultBody = ({
    children,
}: BodyProps) => {
    return (
        <body>
            <Sidebar />
            <main className='px-8 py-6 flex-1 overflow-auto'>
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
