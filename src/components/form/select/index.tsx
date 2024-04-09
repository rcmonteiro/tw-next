'use client'

import { countries } from '@/utils/countries'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'
import Flag from 'react-world-flags'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
  value: string
  template?: 'default' | 'flags'
}

export const Select = ({
  children,
  placeholder,
  value,
  template = 'default',
  ...props
}: SelectProps) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        {template === 'default' ? (
          <SelectPrimitive.Value
            placeholder={placeholder}
            className="text-black"
          />
        ) : (
          <SelectPrimitive.Value
            placeholder={placeholder}
            className="text-black"
          >
            <div className="flex items-center gap-3">
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={value}
              />
              <span>{countries[value]}</span>
            </div>
          </SelectPrimitive.Value>
        )}
        <SelectPrimitive.Icon>
          <ChevronDown className="size-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-e-zinc-200 bg-white"
        >
          <SelectPrimitive.Viewport className="max-h-48 overflow-y-scroll">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
