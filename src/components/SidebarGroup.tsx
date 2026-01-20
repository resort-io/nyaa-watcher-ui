export type SidebarItemProps = {
    name: string;
    children?: React.ReactNode;
    hideName?: boolean;
}

export const SidebarGroup = ({
    name,
    children,
    hideName = false,
}: SidebarItemProps) => {
    const id = name.toLowerCase().replace(/\s+/g, '-');

    return (
        <div role="group" aria-labelledby={`${id}-sidebar-group`} className='pl-0 pr-0 pt-1 pb-1'>
            <h3
                id={`${id}-sidebar-group`}
                className={hideName ? 'hidden' : ''}
            >
                {name}
            </h3>
            <ul
                className='gap-2'
            >
                {children}
            </ul>
        </div>
    );
}
