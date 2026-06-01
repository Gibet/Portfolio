import { useEffect, useState } from 'react'

export const useResponsivePageSize = () => {
  const getPageSize = () => {
    if (typeof globalThis.window === 'undefined') return 6

    const width = globalThis.window.innerWidth
    const height = globalThis.window.innerHeight

    // Estimate available content height after top controls/padding.
    const usableHeight = Math.max(height - 280, 320)

    let columns = 1
    if (width >= 1024) {
      columns = 3
    } else if (width >= 640) {
      columns = 2
    }

    let cardHeight = 110
    if (width >= 1280) {
      cardHeight = 180
    } else if (width >= 640) {
      cardHeight = 140
    }

    const rows = Math.max(1, Math.floor(usableHeight / cardHeight))

    // Keep pagination stable and avoid extreme values on very small/large screens.
    return Math.min(15, Math.max(2, columns * rows))
  }

  const [pageSize, setPageSize] = useState(getPageSize())

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleResize = () => {
      timeoutId = globalThis.setTimeout(() => {
        setPageSize(getPageSize());
      }, 150);  
    }
    globalThis.window.addEventListener('resize', handleResize)
    return () => {
      globalThis.window.removeEventListener('resize', handleResize)
      globalThis.clearTimeout(timeoutId);
    }
  }, [])

  return pageSize
}