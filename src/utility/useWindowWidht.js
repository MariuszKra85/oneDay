import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const windowGlobal = typeof window === 'undefined'
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (windowGlobal) return;
    
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      return width
    };
  });
  return width
  }

export default useWindowWidth