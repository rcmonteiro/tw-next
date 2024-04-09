import { ComponentProps } from 'react'

interface PrefixProps extends ComponentProps<'div'> {}

export const Prefix = (props: PrefixProps) => {
  return <div {...props}></div>
}

interface ControlProps extends ComponentProps<'input'> {}

export const Control = (props: ControlProps) => {
  return (
    <input
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      placeholder="Search"
      {...props}
    />
  )
}

interface RootProps extends ComponentProps<'div'> {}

export const Root = (props: RootProps) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm placeholder:text-zinc-600"
      {...props}
    />
  )
}
