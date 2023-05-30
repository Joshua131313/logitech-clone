import React, { useContext, useEffect } from 'react'
import { StoreContext } from 'StoreContext';
import './Dropdown.css'

interface Props {
  id?: string,
  children: React.ReactNode,
  content: React.ReactNode;
  className?: string;
  position: 'left' | 'right'
}

const DropdownTemplate: React.FC<Props> = (props) => {
  const {id="default-id", content, className, position} = props
  const {openID, setOpenID} = useContext(StoreContext)
 
  useEffect(()=> {
     if(openID) { 
       window.onclick = () => {
        setOpenID('') 
      }
    }
    return () => {
      window.onclick = null
    }
  }, [openID, setOpenID])

  return (
    <div 
      onClick={(e)=> {
         setOpenID(prev=> prev === id ? '' : id);
         e.stopPropagation(); 
      }} 
      className={`drop-cont ${position} ${className} ${openID === id ? 'active-drop': ''}`}
     >
      {props.children}
      <div className="dropdown">
          {content}
      </div>
    </div> 
  )
}
export default DropdownTemplate