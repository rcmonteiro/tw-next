import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
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
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
