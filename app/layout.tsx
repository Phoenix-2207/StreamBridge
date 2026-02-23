import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import PlayerBar from "@/components/PlayerBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className="bg-[#0e1117] text-white font-sans antialiased">
                <div className="flex min-h-screen">
                    <Sidebar />
                    <div className="flex flex-col flex-1 min-w-0">
                        <TopBar />
                        <main className="flex-1 overflow-y-auto p-6">
                            {children}
                        </main>
                        <PlayerBar />
                    </div>
                </div>
            </body>
        </html>
    );
}

