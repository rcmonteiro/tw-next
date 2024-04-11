'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  label: string
  value: string
}

export const SelectItem = ({ label, value, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      {...props}
      value={value}
      className="flex items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 data-[highlighted]:outline-none dark:data-[highlighted]:bg-zinc-700"
    >
      <SelectPrimitive.ItemText>
        <span className="flex items-center gap-2 text-left leading-5 text-black dark:text-zinc-100">
          {label}
        </span>
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
