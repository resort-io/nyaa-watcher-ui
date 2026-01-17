import { SidebarItem } from "@/components/SidebarItem";
import { HomeIcon } from "@/components/icons/home-icon";
import { BellIcon } from "@/components/icons/bell-icon";
import { CompassIcon } from "@/components/icons/compass-icon";
import { GearIcon } from "@/components/icons/gear-icon";
import { BugIcon } from "@/components/icons/bug-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { SidebarGroup } from "@/components/SidebarGroup";
import { SidebarDivider } from "@/components/SidebarDivider.tsx";

export const Sidebar = () => {
    return (
        <aside className="sidebar" data-side="left" aria-hidden="false">
            <nav aria-label="Sidebar navigation">
                <section className="scrollbar">
                    <SidebarGroup name={'main items'} hideName={true}>
                        <SidebarItem
                            name={'Home'}
                            href={'#'}
                            icon={<HomeIcon />}
                        />
                        <SidebarItem
                            name={'Subscriptions'}
                            href={'#'}
                            icon={<BellIcon />}
                        />
                        <SidebarItem
                            name={'Explore'}
                            href={'#'}
                            icon={<CompassIcon />}
                        />
                        <SidebarItem
                            name={'Subscriptions'}
                            href={'#'}
                            icon={<BellIcon />}
                        />
                    </SidebarGroup>

                    <SidebarDivider />

                    <SidebarGroup name={'other items'} hideName={true}>
                        <SidebarItem
                            name={'Settings'}
                            href={'#'}
                            icon={<GearIcon />}
                        />
                        <SidebarItem
                            name={'Report a Bug'}
                            href={'#'}
                            icon={<BugIcon />}
                        />
                        <SidebarItem
                            name={'GitHub'}
                            href={'#'}
                            icon={<GithubIcon />}
                        />
                    </SidebarGroup>
                </section>
            </nav>
        </aside>
    );
}
