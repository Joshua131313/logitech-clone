import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ILink } from 'app/types/uiTypes/uiInterfaces';
import Sublinks from './SubLinks';

interface Props {
    label: string,
    link: string,
    icon: string,
    subLinks?: ILink[]
}

const SidebarLink: React.FC<Props> = (props) => {
    const {label, link, icon, subLinks} = props
    const [showSubLinks, setShowSubLinks] = useState(false)
    return (
     <div 
        className={`flex-col linkwrapper ${showSubLinks ? 'active':''}`}
     >
         <NavLink 
            className={({ isActive }) => {
              return "sidebarlink flex-row sb" + (isActive ? " activelink" : "")
            }}  
  
            to={link}
            end={link === '/' ? true : false}
         >
            <div className="flex-row gap-10 ac">
                <i className={`fa fa-${icon}`}></i>
                <span>{label}</span>
            </div>
            {subLinks &&
              <div className="arrowcont"
                onClick={(e)=> {
                    e.preventDefault(); setShowSubLinks(!showSubLinks)
                }}
              >
                <i className={`fa fa-chevron-right ${showSubLinks ? 'activearrow': ''}`} >
                </i>
              </div>
             }
         </NavLink>
         {(subLinks && showSubLinks) && 
         <Sublinks parentLink={link} subLinks={subLinks} showLinks={showSubLinks} />
         }
     </div>
    )
}

export default SidebarLink;