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
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
    >
      <SelectPrimitive.ItemText className="text-black">
        {label}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="size-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
