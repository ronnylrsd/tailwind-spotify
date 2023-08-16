import {
  Home as HomeIcon,
  Search,
  Library,
  Plus,
  ArrowRight,
  ArrowRightCircleIcon,
  ArrowDown,
  ArrowDown01,
  ArrowDownFromLine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-82 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>

          <nav className="space-y-5 mt-10 bg-zinc-900 rounded-lg p-5">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibol text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
          </nav>

          <nav className="mt-2 bg-zinc-900 rounded-lg p-5">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
              <div className="flex items-end gap-3">
                <Plus />
                <ArrowRight />
              </div>
            </a>
            <div className="flex mt-2 gap-1">
              <a className="font-normal px-1 text-sm text-zinc-50 bg-zinc-950 rounded-xl">
                Playlists
              </a>
              <a className="font-normal px-1 text-sm text-zinc-50 bg-zinc-950 rounded-xl">
                Podcasts & Shows
              </a>
              <a className="font-normal px-1 text-sm text-zinc-50 bg-zinc-950 rounded-xl">
                Albums
              </a>
              <a className="font-normal px-1 text-sm text-zinc-50 bg-zinc-950 rounded-xl">
                Artists
              </a>{" "}
            </div>

            <div className=" mt-2 flex">
              <Search />
              <div className="flex">
                <text className="text-sm text-zinc-300 font-semibold">
                  Recent
                </text>
                <ArrowDown />
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Liked Songs
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                DJ marcelinha
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                best taylor swift bridges to scream (or cry) to at 3 am
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Spider-Verse: The Official Playlist
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                introvertido sofrendo
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                HARD GYM by DJ
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Desenhos
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Speak Now (TS)
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Time to be sad
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Suave
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Alheio
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                PIRATA
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                reputation
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                Owl City
              </a>
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Morning</h1>

          <div className="grid grid-cols-3 gap-4 overflow-hidden">
            <div className="bg-white/10 rounded-full">Playlist</div>
            <div className="bg-white/10 rounded-full">Playlist</div>
            <div className="bg-white/10 rounded-full">Playlist</div>
            <div className="bg-white/10 rounded-full">Playlist</div>
            <div className="bg-white/10 rounded-full">Playlist</div>
            <div className="bg-white/10 rounded-full">Playlist</div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
