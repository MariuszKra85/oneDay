import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (typeof window.innerWidth === 'undefined') return;
    
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