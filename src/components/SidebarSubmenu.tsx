export type SidebarItemProps = {
    name: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export const SidebarSubmenu = ({ name, icon, children }: SidebarItemProps) => {
    const id = name.toLowerCase().replace(/\s+/g, '-');

    return (
        <li>
            <details id={`${id}-sidebar-submenu`}>
                <summary
                    aria-controls={`${id}-sidebar-submenu-content`}
                    className='select-none font-medium'
                >
                    {icon}
                    {name}
                </summary>

                <ul
                    id={`${id}-sidebar-submenu-content`}
                    className='border-l-0 gap-1 mt-0.5 pr-0'
                >
                    {children}
                </ul>
            </details>
        </li>
    );
}
