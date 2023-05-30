import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

interface Props {
  disabled?: boolean,
  imgFileName?: string;
  showLogoName?: boolean
}

export const Logo: React.FC<Props> = (props) => {
  const {
    disabled=false, 
    imgFileName='logo.png',
    showLogoName = false
  } = props
  const Tag = disabled ? 'div' : Link
  return (
    <Tag to='/' className="logo flex-row">
        <img src={require(`./${imgFileName}`)} alt="logo" />
       {showLogoName && <span>Deskly</span>}
    </Tag>
  )
}