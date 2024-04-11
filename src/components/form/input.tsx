import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface PrefixProps extends ComponentProps<'div'> {}

export const Prefix = (props: PrefixProps) => {
  return <div {...props}></div>
}

interface ControlProps extends ComponentProps<'input'> {}

export const Control = (props: ControlProps) => {
  return (
    <input
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder:text-zinc-400"
      placeholder="Search"
      {...props}
    />
  )
}

interface RootProps extends ComponentProps<'div'> {}

export const Root = (props: RootProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-900  dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}
