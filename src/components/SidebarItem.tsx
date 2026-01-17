export type SidebarItemProps = {
    name: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
}

export const SidebarItem = ({ name, href, icon, external }: SidebarItemProps) => {
    return (
        <li>
            <a
                href={href}
                className='h-10 p-3 bg-transparent hover:bg-[var(--color-sidebar-accent)] active:bg-[var(--color-sidebar-accent)]'
                rel={external ? 'noopener noreferrer' : undefined}
                target={external ? '_blank' : undefined}
            >
                {icon}
                <span>
                    {name}
                </span>
            </a>
        </li>
    );
}
