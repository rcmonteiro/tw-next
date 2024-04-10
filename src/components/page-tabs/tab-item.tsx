import { TabsTrigger } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export const TabItem = ({ title, value, isSelected }: TabItemProps) => {
  return (
    <TabsTrigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className=" group-focus-visible:rounded-sm group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        ></motion.div>
      )}
    </TabsTrigger>
  )
}
