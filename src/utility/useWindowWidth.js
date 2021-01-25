import { useState, useEffect } from 'react'


const Handler = () =>{
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
      
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      return width
    };
  });
  return width
}

const useWindowWidth = () => {
  if (typeof window === 'undefined') return;
  
  return Handler();
  }

export default useWindowWidth