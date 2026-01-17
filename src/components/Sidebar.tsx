import { SidebarItem } from "@/components/SidebarItem";
import { TerminalIcon } from "@/components/icons/terminal-icon";
import { RobotIcon } from "@/components/icons/robot-icon";
import { SidebarGroup } from "@/components/SidebarGroup";
import {SidebarDivider} from "@/components/SidebarDivider.tsx";

export const Sidebar = () => {
    return (
        <aside className="sidebar" data-side="left" aria-hidden="false">
            <nav aria-label="Sidebar navigation">
                <section className="scrollbar">
                    <SidebarGroup name={'main items'} hideName={true}>
                        <SidebarItem
                            name={'Home'}
                            href={'#'}
                            icon={<TerminalIcon />} // TODO: Update icon
                        />
                        <SidebarItem
                            name={'Subscriptions'}
                            href={'#'}
                            icon={<RobotIcon />} // TODO: Update icon
                        />
                        <SidebarItem
                            name={'Explore'}
                            href={'#'}
                            icon={<RobotIcon />} // TODO: Update icon
                        />
                        <SidebarItem
                            name={'Subscriptions'}
                            href={'#'}
                            icon={<RobotIcon />} // TODO: Update icon
                        />

                        {/*<SidebarSubmenu*/}
                        {/*    name={'Settings'}*/}
                        {/*    icon={<GearIcon />}*/}
                        {/*>*/}
                        {/*    <SidebarItem*/}
                        {/*        name={'General'}*/}
                        {/*        href={'#'}*/}
                        {/*        icon={<TerminalIcon />}*/}
                        {/*    />*/}
                        {/*    <SidebarItem*/}
                        {/*        name={'Team'}*/}
                        {/*        href={'#'}*/}
                        {/*        icon={<TerminalIcon />}*/}
                        {/*    />*/}
                        {/*</SidebarSubmenu>*/}
                    </SidebarGroup>

                    <SidebarDivider />

                    <SidebarGroup name={'other items'} hideName={true}>
                        <SidebarItem
                            name={'Settings'}
                            href={'#'}
                            icon={<RobotIcon/>} // TODO: Update icon
                        />
                        <SidebarItem
                            name={'Report a Bug'}
                            href={'#'}
                            icon={<RobotIcon/>} // TODO: Update icon
                        />
                        <SidebarItem
                            name={'GitHub'}
                            href={'#'}
                            icon={<RobotIcon/>} // TODO: Update icon
                        />
                    </SidebarGroup>
                </section>
            </nav>
        </aside>
    );
}
