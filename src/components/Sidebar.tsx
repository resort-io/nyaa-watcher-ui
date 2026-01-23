import { SidebarItem } from "@/components/SidebarItem";
import { HomeIcon } from "@/components/icons/home-icon";
import { BellIcon } from "@/components/icons/bell-icon";
import { CompassIcon } from "@/components/icons/compass-icon";
import { BookmarkIcon } from "@/components/icons/BookmarkIcon.tsx";
import { GearIcon } from "@/components/icons/gear-icon";
import { BugIcon } from "@/components/icons/bug-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { SidebarGroup } from "@/components/SidebarGroup";
import { SidebarDivider } from "@/components/SidebarDivider.tsx";

export const Sidebar = () => {
    return (
        <aside className="sidebar" data-side="left" aria-hidden="false">
            <nav aria-label="Sidebar navigation">
                <section className="scrollbar pl-2 pr-2 pt-1 pb-1">
                    <SidebarGroup name={'main items'} hideName={true}>
                        <SidebarItem
                            name={'Home'}
                            href={'/'}
                            icon={<HomeIcon />}
                        />
                        <SidebarItem
                            name={'Explore'}
                            href={'/explore'}
                            icon={<CompassIcon />}
                        />
                        <SidebarItem
                            name={'Subscriptions'}
                            href={'/subscriptions'}
                            icon={<BellIcon />}
                        />
                        <SidebarItem
                            name={'Saved'}
                            href={'/saved'}
                            icon={<BookmarkIcon />}
                        />
                    </SidebarGroup>

                    <SidebarDivider />

                    <SidebarGroup name={'other items'} hideName={true}>
                        <SidebarItem
                            name={'Settings'}
                            href={'/settings'}
                            icon={<GearIcon/>}
                        />

                        <li role="group" className="button-group w-full mt-2">
                            <a
                                className="btn-icon-outline flex-1 h-10"
                                title="GitHub"
                                href='https://github.com/resort-io/nyaa-watcher-ui'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <GithubIcon/>
                            </a>
                            <a
                                className="btn-icon-outline flex-1 h-10"
                                title="Report a Bug"
                                href='https://github.com/resort-io/nyaa-watcher-ui/issues'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <BugIcon/>
                            </a>
                        </li>
                    </SidebarGroup>
                </section>
            </nav>
        </aside>
    );
}
