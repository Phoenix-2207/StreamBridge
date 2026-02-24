export interface Track {
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: string;
}

export interface Playlist {
    id: string;
    title: string;
    description: string;
    coverColor: string;
    trackCount: number;
    tracks: Track[];
}

export const playlists: Playlist[] = [
    {
        id: "1",
        title: "Late Night Coding",
        description: "Chill beats for deep focus",
        coverColor: "from-purple-500 to-indigo-600",
        trackCount: 42,
        tracks: [
            {
                id: "1",
                title: "Midnight Stacktrace",
                artist: "Lo-Fi Dev",
                album: "Debug Dreams",
                duration: "3:21",
            },
            {
                id: "2",
                title: "Async Drift",
                artist: "Promise Chain",
                album: "Event Loop",
                duration: "4:02",
            },
            {
                id: "3",
                title: "Silent Compile",
                artist: "Type Whisper",
                album: "Strongly Typed",
                duration: "2:58",
            },
            {
                id: "4",
                title: "Pixel Nights",
                artist: "Neon Grid",
                album: "Render Loop",
                duration: "3:47",
            },
        ],
    },
    {
        id: "2",
        title: "Gym Mode",
        description: "High energy motivation",
        coverColor: "from-red-500 to-orange-500",
        trackCount: 28,
        tracks: [
            {
                id: "1",
                title: "PR Day",
                artist: "Iron Logic",
                album: "Reps & Sets",
                duration: "3:12",
            },
            {
                id: "2",
                title: "Overload",
                artist: "Barbell Bass",
                album: "Failure Point",
                duration: "2:59",
            },
            {
                id: "3",
                title: "Last Set Energy",
                artist: "Chalk Hands",
                album: "No Excuses",
                duration: "3:44",
            },
            {
                id: "4",
                title: "Final Sprint",
                artist: "Track Heat",
                album: "Finish Line",
                duration: "3:05",
            },
        ],
    },
    {
        id: "3",
        title: "Indie Discoveries",
        description: "Fresh alternative vibes",
        coverColor: "from-pink-400 to-rose-500",
        trackCount: 63,
        tracks: [
            {
                id: "1",
                title: "Side Street Echoes",
                artist: "Fire Escape",
                album: "Rooftop Stories",
                duration: "3:36",
            },
            {
                id: "2",
                title: "Polaroid Season",
                artist: "Faded Film",
                album: "Sun-Soaked",
                duration: "4:11",
            },
            {
                id: "3",
                title: "City Lanterns",
                artist: "Paper Boats",
                album: "Harbor Lights",
                duration: "3:18",
            },
            {
                id: "4",
                title: "Blue Window",
                artist: "Static Flowers",
                album: "Quiet Rooms",
                duration: "2:52",
            },
        ],
    },
    {
        id: "4",
        title: "Throwback 2010s",
        description: "Nostalgic bangers",
        coverColor: "from-cyan-400 to-fuchsia-500",
        trackCount: 35,
        tracks: [
            {
                id: "1",
                title: "Dancefloor Status",
                artist: "Timeline",
                album: "News Feed",
                duration: "3:40",
            },
            {
                id: "2",
                title: "Offline Tonight",
                artist: "Pixel Hearts",
                album: "Push Notifications",
                duration: "3:27",
            },
            {
                id: "3",
                title: "Mixtape Messages",
                artist: "Burned CD",
                album: "Top 8",
                duration: "3:02",
            },
            {
                id: "4",
                title: "Status Update",
                artist: "Retro Feed",
                album: "Throwback Scroll",
                duration: "3:55",
            },
        ],
    },
    {
        id: "5",
        title: "Acoustic Mornings",
        description: "Gentle strings & soft vocals",
        coverColor: "from-amber-400 to-yellow-500",
        trackCount: 19,
        tracks: [
            {
                id: "1",
                title: "Sun Through Blinds",
                artist: "Kitchen Light",
                album: "Morning Tiles",
                duration: "3:09",
            },
            {
                id: "2",
                title: "Honey on Toast",
                artist: "Warm Mugs",
                album: "First Sip",
                duration: "3:24",
            },
            {
                id: "3",
                title: "Soft Pages",
                artist: "Margin Notes",
                album: "Dog-Eared",
                duration: "2:57",
            },
            {
                id: "4",
                title: "Window Plants",
                artist: "Quiet Corner",
                album: "Green Rooms",
                duration: "3:33",
            },
        ],
    },
    {
        id: "6",
        title: "Electronic Dreams",
        description: "Synthwave & future bass",
        coverColor: "from-violet-500 to-purple-700",
        trackCount: 51,
        tracks: [
            {
                id: "1",
                title: "Neon Overclock",
                artist: "City Kernel",
                album: "Midnight Firmware",
                duration: "4:06",
            },
            {
                id: "2",
                title: "Retro Circuitry",
                artist: "Bitwave",
                album: "CRT Nights",
                duration: "3:48",
            },
            {
                id: "3",
                title: "Parallel Lanes",
                artist: "Midnight Driver",
                album: "Skyline Grid",
                duration: "3:26",
            },
            {
                id: "4",
                title: "Electric Dawn",
                artist: "Nova Phase",
                album: "First Light",
                duration: "4:01",
            },
        ],
    },
    {
        id: "7",
        title: "Road Trip Mix",
        description: "Windows down, volume up",
        coverColor: "from-emerald-400 to-teal-600",
        trackCount: 37,
        tracks: [
            {
                id: "1",
                title: "Mile Marker 89",
                artist: "Open Highway",
                album: "Rest Stop Stories",
                duration: "3:45",
            },
            {
                id: "2",
                title: "Detour Signs",
                artist: "Backroad Choir",
                album: "Lost Exits",
                duration: "3:19",
            },
            {
                id: "3",
                title: "Snack Run",
                artist: "Glovebox",
                album: "Gas Station Lights",
                duration: "2:54",
            },
            {
                id: "4",
                title: "Golden Hour Lane",
                artist: "Polaroid Maps",
                album: "Sunset Drive",
                duration: "3:58",
            },
        ],
    },
    {
        id: "8",
        title: "Jazz & Coffee",
        description: "Smooth tunes for slow days",
        coverColor: "from-stone-500 to-amber-700",
        trackCount: 24,
        tracks: [
            {
                id: "1",
                title: "Steam & Cymbals",
                artist: "Corner Trio",
                album: "Third Cup",
                duration: "5:01",
            },
            {
                id: "2",
                title: "Porcelain Blues",
                artist: "Late Checkout",
                album: "Lobby Nights",
                duration: "4:37",
            },
            {
                id: "3",
                title: "Velvet Foam",
                artist: "Quiet Booth",
                album: "Espresso Lines",
                duration: "4:09",
            },
            {
                id: "4",
                title: "Window Rain Solo",
                artist: "Umbrella Keys",
                album: "Slow Pour",
                duration: "5:16",
            },
        ],
    },
];
