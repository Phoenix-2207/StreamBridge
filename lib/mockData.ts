export interface Playlist {
    id: string;
    title: string;
    description: string;
    coverColor: string;
    trackCount: number;
}

export const playlists: Playlist[] = [
    {
        id: "1",
        title: "Late Night Coding",
        description: "Chill beats for deep focus",
        coverColor: "from-purple-500 to-indigo-600",
        trackCount: 42,
    },
    {
        id: "2",
        title: "Gym Mode",
        description: "High energy motivation",
        coverColor: "from-red-500 to-orange-500",
        trackCount: 28,
    },
    {
        id: "3",
        title: "Indie Discoveries",
        description: "Fresh alternative vibes",
        coverColor: "from-pink-400 to-rose-500",
        trackCount: 63,
    },
    {
        id: "4",
        title: "Throwback 2010s",
        description: "Nostalgic bangers",
        coverColor: "from-cyan-400 to-fuchsia-500",
        trackCount: 35,
    },
    {
        id: "5",
        title: "Acoustic Mornings",
        description: "Gentle strings & soft vocals",
        coverColor: "from-amber-400 to-yellow-500",
        trackCount: 19,
    },
    {
        id: "6",
        title: "Electronic Dreams",
        description: "Synthwave & future bass",
        coverColor: "from-violet-500 to-purple-700",
        trackCount: 51,
    },
    {
        id: "7",
        title: "Road Trip Mix",
        description: "Windows down, volume up",
        coverColor: "from-emerald-400 to-teal-600",
        trackCount: 37,
    },
    {
        id: "8",
        title: "Jazz & Coffee",
        description: "Smooth tunes for slow days",
        coverColor: "from-stone-500 to-amber-700",
        trackCount: 24,
    },
];
