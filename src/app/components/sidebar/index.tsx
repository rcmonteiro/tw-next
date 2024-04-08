import { Search } from 'lucide-react'
import { Logo } from './logo'
import { MainNavigation } from './main-navigation'

export const Sidebar = () => {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm placeholder:text-zinc-600">
        <Search className="size-5 text-zinc-500" />
        <input type="text" className="flex-1" placeholder="Search" />
      </div>

      <MainNavigation />
    </aside>
  )
}
