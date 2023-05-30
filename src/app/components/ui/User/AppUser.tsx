import React from 'react'
import { Link } from 'react-router-dom'
import ImgLoaded from '../ImgLoaded/ImgLoaded'
import './User.css' 
import { IUser } from 'app/types/dbTypes/dbInterfaces'

interface Props {
  showName?: boolean,
  isLink?: boolean,
  user: IUser
}

export const AppUser: React.FC<Props> = (props) => {
  const {showName= true, isLink, user} = props
  let El = isLink ? Link : 'div'
  return (
    <El to={`/users/${user.uid}`} className="user flex-row ac" >
      {user &&
          <ImgLoaded src={user.profilePic ?? require('assets/profile-placeholder.png')}/>
      }
      {showName &&  <span>{user?.name}</span>}
    </El>
  )
}
