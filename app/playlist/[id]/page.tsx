import { notFound } from "next/navigation";
import { playlists } from "@/lib/mockData";
import TrackRow from "@/components/TrackRow";

interface PlaylistPageProps {
    params: {
        id: string;
    };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
    const playlist = playlists.find((p) => p.id === params.id);

    if (!playlist) {
        notFound();
    }

    return (
        <section className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg bg-gradient-to-br flex-shrink-0 shadow-xl shadow-black/40 overflow-hidden">
                    <div className={`w-full h-full ${playlist.coverColor}`} />
                </div>

                <div className="flex-1 min-w-0 space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Playlist
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white truncate">
                        {playlist.title}
                    </h1>
                    <p className="text-sm text-muted-foreground max-w-xl">
                        {playlist.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/80">
                        <span>{playlist.trackCount} tracks</span>
                    </div>
                </div>
            </div>

            {/* Tracks */}
            <div className="bg-[#090c11] border border-white/5 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5 text-xs uppercase tracking-[0.2em] text-muted-foreground/70 grid grid-cols-[40px,minmax(0,3fr),minmax(0,2fr),80px] gap-4">
                    <span className="text-center">#</span>
                    <span>Title</span>
                    <span>Artist</span>
                    <span className="text-right">Time</span>
                </div>

                <div className="divide-y divide-white/5">
                    {playlist.tracks.map((track, index) => (
                        <TrackRow key={track.id} index={index} track={track} />
                    ))}
                </div>
            </div>
        </section>
    );
}

