import Image from 'next/image'
import { LayoutList, Laptop2, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/1989TV.png" className="w-full" width={56} height={56} alt="capa da playlist 1989 (TV)" />
          <div className="flex flex-col">
            <strong className="font-normal">Clean</strong>
            <span className="text-sm text-zinc-400">Taylor Swift</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
                <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">2:19</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">4:31</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    )
}