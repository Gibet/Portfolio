import { useEffect, useState } from 'react'

export const useResponsivePageSize = () => {
  const [pageSize, setPageSize] = useState(getPageSize())

  function getPageSize() {
    if (window.innerWidth >= 1280) return 12
    if (window.innerWidth >= 1024) return 9
    if (window.innerWidth >= 768) return 6
    return 3
  }

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return pageSize
}