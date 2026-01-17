export type SidebarItemProps = {
    name: string;
    href: string;
    icon?: React.ReactNode;
}

export const SidebarItem = ({ name, href, icon }: SidebarItemProps) => {
    return (
        <li>
            <a
                href={href}
                className='h-10 p-3 bg-transparent hover:bg-[var(--color-sidebar-accent)] active:bg-[var(--color-sidebar-accent)]'
            >
                {icon}
                <span>
                    {name}
                </span>
            </a>
        </li>
    );
}
