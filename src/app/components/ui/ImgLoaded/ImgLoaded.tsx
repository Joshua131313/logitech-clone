import React, { useState, useEffect } from 'react'
import './ImgLoaded.css'

interface Props {
  src: string,
  className?: string,
  skeletonclass?: string;
  alt?: string
}

const ImgLoaded: React.FC<Props> = (props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const {
    src,
    skeletonclass = '',
    className = '',
    alt='image'
  } = props


  // useEffect(() => {
  //   return () => {
  //     setIsLoaded(false)
  //   }
  // }, [src])

  return (
    <div className={`img-loaded ${className}`} >
      {/* <img src={img} alt="" onLoad={()=> setIsLoaded(true)}/> */}
      <img 
        referrerPolicy='no-referrer' 
        onLoad={() => setIsLoaded(true)} 
        src={src} 
        alt={alt} 
        style={isLoaded ? { display: 'block' } : { display: 'none' }} 
      />
      <div 
        className={"skeleton-img " + skeletonclass} 
        style={isLoaded ? { display: 'none' } : { display: 'block' }} 
      />
    </div>
  )
}
export default ImgLoaded 