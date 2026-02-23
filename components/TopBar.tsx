"use client";

import { Search, Bell, User } from "lucide-react";

export default function TopBar() {
    return (
        <header className="flex items-center justify-between h-16 px-6 shrink-0 bg-transparent">
            {/* Left spacer */}
            <div className="w-8" />

            {/* Search bar */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-full max-w-md transition-colors duration-200 hover:bg-white/[0.08] focus-within:border-accent/50 focus-within:bg-white/[0.08]">
                <Search size={16} className="text-muted-foreground shrink-0" />
                <input
                    type="text"
                    placeholder="Search songs, playlists, artists..."
                    className="bg-transparent text-sm text-white placeholder:text-muted-foreground outline-none w-full"
                    readOnly
                />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3 ml-4">
                <button className="p-2 rounded-full text-muted-foreground hover:text-white hover:bg-white/5 transition-colors duration-200">
                    <Bell size={18} />
                </button>
                <button className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/80 to-accent flex items-center justify-center text-accent-foreground hover:ring-2 hover:ring-accent/30 transition-all duration-200">
                    <User size={16} />
                </button>
            </div>
        </header>
    );
}
