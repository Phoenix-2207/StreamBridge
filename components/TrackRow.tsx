import type { Track } from "@/lib/mockData";

interface TrackRowProps {
    index: number;
    track: Track;
}

export default function TrackRow({ index, track }: TrackRowProps) {
    return (
        <div className="grid grid-cols-[40px,minmax(0,3fr),minmax(0,2fr),80px] items-center gap-4 px-4 py-2 rounded-md text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
            <div className="text-xs tabular-nums text-muted-foreground/70">
                {index + 1}
            </div>
            <div className="min-w-0">
                <p className="font-medium text-white truncate">{track.title}</p>
                <p className="text-xs text-muted-foreground truncate">{track.album}</p>
            </div>
            <div className="min-w-0">
                <p className="text-xs truncate">{track.artist}</p>
            </div>
            <div className="text-xs tabular-nums text-right text-muted-foreground/80">
                {track.duration}
            </div>
        </div>
    );
}

