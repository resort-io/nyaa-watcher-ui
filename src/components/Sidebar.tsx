import { SidebarItem } from "@/components/SidebarItem";
import { HomeIcon } from "@/components/icons/home-icon";
import { BellIcon } from "@/components/icons/bell-icon";
import { CompassIcon } from "@/components/icons/compass-icon";
import { BookmarkIcon } from "@/components/icons/bookmark-icon";
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
                            href={'/'}
                            icon={<HomeIcon />}
                        />
                        <SidebarItem
                            name={'Subscriptions'}
                            href={'/subscriptions'}
                            icon={<BellIcon />}
                        />
                        <SidebarItem
                            name={'Explore'}
                            href={'/explore'}
                            icon={<CompassIcon />}
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

                        <div role="group" className="button-group flex w-full mt-2">
                            <a
                                className="btn-icon-outline flex-1"
                                title="GitHub"
                                href='https://github.com/resort-io/nyaa-watcher-ui'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <GithubIcon/>
                            </a>
                            <a
                                className="btn-icon-outline flex-1"
                                title="Report a Bug"
                                href='https://github.com/resort-io/nyaa-watcher-ui/issues'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <BugIcon/>
                            </a>
                        </div>
                    </SidebarGroup>
                </section>
            </nav>
        </aside>
    );
}
