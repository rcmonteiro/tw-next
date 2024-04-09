'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

export interface ControlProps extends ComponentProps<'input'> {}

export const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      multiple={multiple}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
