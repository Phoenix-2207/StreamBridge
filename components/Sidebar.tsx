"use client";

import { useState } from "react";
import { Home, ListMusic, ArrowLeftRight, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Your Playlists", icon: ListMusic, href: "/playlists" },
    { label: "Migrations", icon: ArrowLeftRight, href: "/migrations" },
    { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Home");
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={clsx(
                "flex flex-col bg-sidebar transition-all duration-300 ease-in-out border-r border-white/5",
                collapsed ? "w-[72px]" : "w-[260px]",
                "max-md:w-[72px]"
            )}
        >
            {/* Logo */}
            <div className="flex items-center gap-3 px-5 h-16 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent-foreground">S</span>
                </div>
                <span
                    className={clsx(
                        "text-lg font-bold text-white whitespace-nowrap transition-opacity duration-200",
                        collapsed ? "opacity-0 hidden" : "opacity-100",
                        "max-md:opacity-0 max-md:hidden"
                    )}
                >
                    StreamBridge
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col gap-1 px-3 mt-4">
                {navItems.map((item) => {
                    const isActive = activeItem === item.label;
                    return (
                        <button
                            key={item.label}
                            onClick={() => setActiveItem(item.label)}
                            className={clsx(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                                isActive
                                    ? "bg-white/10 text-white"
                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                            )}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full" />
                            )}

                            <item.icon
                                size={20}
                                className={clsx(
                                    "shrink-0 transition-colors duration-200",
                                    isActive ? "text-accent" : "text-muted-foreground group-hover:text-white"
                                )}
                            />

                            <span
                                className={clsx(
                                    "whitespace-nowrap transition-opacity duration-200",
                                    collapsed ? "opacity-0 hidden" : "opacity-100",
                                    "max-md:opacity-0 max-md:hidden"
                                )}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* Collapse toggle (desktop only) */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden md:flex items-center justify-center mx-3 mb-4 py-2 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
                {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
        </aside>
    );
}
