import React, { useEffect } from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { auth } from 'Fire';
import { IDropdownOption } from 'app/types/uiTypes/uiInterfaces';
import DropdownTemplate from './DropdownTemplate';
import LogoutWrapper from '../LogoutWrapper/LogoutWrapper';

interface Props {
  options: IDropdownOption[],
  id?: string,
  children: React.ReactNode;
  position: 'left' | 'right';
}

const Dropdown: React.FC<Props> = (props) => {
  const {options, id="default-id"} = props
 
  const optionsrow = options.map((option, i)=> {
  if ('title' in option) {
    return (
      <div 
          className="graytext sia flex-col" 
          onClick={e=> e.stopPropagation()}
          key={'display-name'}
        >
        <span>{auth.currentUser?.displayName}</span>
        <span>{auth.currentUser?.email}</span>
      </div>
    )
  }
  else if('link' in option) {
      return (
        <Link key={i} to={option.link} className='drop-option'>
          <i className={'fal fa-'+option.icon}></i>
          <span>{option.text}</span>
        </Link>
      )
    }
    else if('logout' in option) {
      return (
        <LogoutWrapper 
          className='drop-option'
          key={'logout-wrapper'}
        >
          <i className='fal fa-sign-out'></i>
          <span>Sign out</span>
        </LogoutWrapper>
      )
    }
    else {
      return ( 
        <div key={option.text} onClick={()=> option.onClick()} className='drop-option'>
          {option.icon && <i className={'fal fa-'+option.icon}></i>}
          <span>{option.text}</span>
        </div>
      )
    }
  })

  return (
    <DropdownTemplate 
      position={props.position}
      id={id}
      content={optionsrow}
    >
       {props.children}
    </DropdownTemplate>
  )
}
export default Dropdown