"use client";

import { Play } from "lucide-react";
import type { Playlist } from "@/lib/mockData";

interface PlaylistCardProps {
    playlist: Playlist;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
    return (
        <div className="group relative bg-[#1a1f27] border border-white/5 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/40">
            {/* Cover area */}
            <div className="relative overflow-hidden rounded-lg">
                <div className={`aspect-square rounded-lg bg-gradient-to-br ${playlist.coverColor} transition-all duration-300 group-hover:brightness-110`} />

                {/* Play button overlay */}
                <button
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#2AF598] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-black/40 hover:scale-110"
                    aria-label={`Play ${playlist.title}`}
                >
                    <Play size={18} className="text-[#0e1117] ml-0.5" fill="#0e1117" />
                </button>
            </div>

            {/* Info */}
            <div className="mt-3 space-y-1">
                <h3 className="text-sm font-semibold text-white truncate">
                    {playlist.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                    {playlist.description}
                </p>
                <p className="text-[11px] text-muted-foreground/60">
                    {playlist.trackCount} tracks
                </p>
            </div>
        </div>
    );
}
