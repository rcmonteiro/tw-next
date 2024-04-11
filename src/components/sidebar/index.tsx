'use client'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import * as Input from '@/components/form/input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../button'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpace } from './used-space'

export const Sidebar = () => {
  return (
    <Collapsible.Root className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="size-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem icon={Home} title="Home" />
          <NavItem icon={BarChart} title="Dashboard" />
          <NavItem icon={SquareStack} title="Projects" />
          <NavItem icon={CheckSquare} title="Tasks" />
          <NavItem icon={Flag} title="Reporting" />
          <NavItem icon={Users} title="Users" />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem icon={LifeBuoy} title="Support" />
            <NavItem icon={Cog} title="Settings" />
          </nav>

          <UsedSpace />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
