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
}

export const User: React.FC<Props> = (props) => {
  const {showName= true, isLink, link='/my-account', className} = props
  let El = (isLink || !auth.currentUser) ? Link : 'div'

  return (
    <El to={auth.currentUser ? link : '/login'} className={`${className} user flex-row ac app-icon`} >
      {auth.currentUser && auth.currentUser.photoURL ?
          <ImgLoaded src={auth.currentUser.photoURL}/>
          :
          <i className='fal fa-user'></i>
      }
     {showName &&  <span>{auth?.currentUser?.displayName}</span>}
    </El>
  )
}
