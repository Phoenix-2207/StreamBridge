import { playlists } from "@/lib/mockData";
import PlaylistCard from "@/components/PlaylistCard";

export default function Home() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">Your Playlists</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {playlists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </section>
    );
}
