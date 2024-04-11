import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      secondary: 'border-zinc-300 text-zinc-700 hover:bg-zinc-50',
      ghost:
        'rounded-md p-2 hover:bg-zinc-50 text-zinc-500 hover:text-zinc-700',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <button {...props} className={button({ variant, className })} />
}
