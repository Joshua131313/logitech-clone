import { ITab } from 'app/types/uiTypes/uiInterfaces';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css'

interface Props {
    tabs: ITab[],
    badges?: number[]
}

const Tabs: React.FC<Props> = props => {
    const {tabs, badges} = props
    
    const tabsRender = tabs?.map((tab, i)=> {
        let badge = badges && badges[i]
        return (
            <NavLink 
              key={i}
               end={tab.link === ''}
               to={tab.link} 
               className={({ isActive }) => "tab" + ((isActive) ? " activeTab" : "")}
              >
                {tab.text} {badge && `(${badge})`}
            </NavLink>
        )
    })

    return (
        <div className='tabs'>
            {tabsRender}
        </div>
    );
};


export default Tabs;