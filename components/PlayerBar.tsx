"use client";

import { Play, Volume2, SkipBack, SkipForward, Repeat, Shuffle } from "lucide-react";

export default function PlayerBar() {
    return (
        <footer className="flex items-center justify-between h-[72px] px-4 md:px-6 bg-player border-t border-white/5 shrink-0">
            {/* Left: Track info */}
            <div className="flex items-center gap-3 min-w-0 w-1/3">
                <div className="w-11 h-11 rounded-md bg-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-accent/30 to-accent/5" />
                </div>
                <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">No track playing</p>
                    <p className="text-xs text-muted-foreground truncate">Unknown artist</p>
                </div>
            </div>

            {/* Center: Playback controls */}
            <div className="flex items-center gap-4 w-1/3 justify-center">
                <button className="text-muted-foreground hover:text-white transition-colors duration-200 hidden sm:block">
                    <Shuffle size={16} />
                </button>
                <button className="text-muted-foreground hover:text-white transition-colors duration-200">
                    <SkipBack size={18} />
                </button>
                <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200">
                    <Play size={18} className="text-black ml-0.5" />
                </button>
                <button className="text-muted-foreground hover:text-white transition-colors duration-200">
                    <SkipForward size={18} />
                </button>
                <button className="text-muted-foreground hover:text-white transition-colors duration-200 hidden sm:block">
                    <Repeat size={16} />
                </button>
            </div>

            {/* Right: Volume */}
            <div className="flex items-center gap-2 w-1/3 justify-end">
                <button className="text-muted-foreground hover:text-white transition-colors duration-200">
                    <Volume2 size={18} />
                </button>
                <div className="hidden sm:block w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-white/40 rounded-full" />
                </div>
            </div>
        </footer>
    );
}
