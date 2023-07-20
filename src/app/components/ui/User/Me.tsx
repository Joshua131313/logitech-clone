import { auth } from 'Fire'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ImgLoaded from '../ImgLoaded/ImgLoaded'
import './User.css' 

interface Props {
  showName?: boolean,
  isLink?: boolean;
  link?: string;
  className?: string;
  showEmail?: boolean;
}

export const User: React.FC<Props> = (props) => {
  const {showName = true, showEmail = false, isLink, link='/my-account', className} = props
  let El = (isLink || !auth.currentUser) ? Link : 'div'

  return (
    <El to={auth.currentUser ? link : '/login'} className={`${className} user flex-row ac`} >
      {auth.currentUser && auth.currentUser.photoURL ?
          <ImgLoaded src={auth.currentUser.photoURL}/>
          :
          <i className='fal fa-user'></i>
      }
     <div className="flex-col">
      {showName &&  <span className='user-name'>{auth?.currentUser?.displayName}</span>}
      {showEmail &&  <span className='user-email'>{auth?.currentUser?.email}</span>}
     </div>
    </El>
  )
}
