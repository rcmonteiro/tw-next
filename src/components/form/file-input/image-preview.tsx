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
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-zinc-800">
      <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
    </div>
  ) : (
    <Image
      src={previewURL}
      alt=""
      width={64}
      height={64}
      className="h-16 w-16 rounded-full bg-violet-50 object-cover dark:bg-zinc-800"
    />
  )
}
