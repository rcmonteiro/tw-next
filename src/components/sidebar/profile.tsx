import { LogOut } from 'lucide-react'
import Image from 'next/image'

export const Profile = () => {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/rcmonteiro.png"
        className="size-10 rounded-full"
        width={40}
        height={40}
        alt=""
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <span className="text-sm font-semibold text-zinc-700">
          Ricardo Monteiro
        </span>
        <span className="truncate text-sm text-zinc-500">
          rcmonteiro@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
