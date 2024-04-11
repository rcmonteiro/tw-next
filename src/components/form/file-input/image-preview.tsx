'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'
import { useFileInput } from './root'

export const ImagePreview = () => {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  return previewURL === null ? (
    <div className="flex size-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
      <User className="size-8 text-violet-500 dark:text-violet-300" />
    </div>
  ) : (
    <Image
      src={previewURL}
      alt=""
      width={64}
      height={64}
      className="size-16 rounded-full object-cover"
    />
  )
}
