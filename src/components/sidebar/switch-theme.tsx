import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => setHasMounted(true))

  // this line is the key to avoid the error.
  if (!hasMounted) return null

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
