'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export interface RootProps extends ComponentProps<'div'> {}

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const handleSelectedFiles = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles((state) => [...state, ...files])
    }
  }
  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected: handleSelectedFiles }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
