import { ILink } from 'app/types/uiTypes/uiInterfaces';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    subLinks: ILink[],
    showLinks: boolean,
    parentLink: string
}

const Sublinks: React.FC<Props> = (props) => {
    const {subLinks, showLinks, parentLink} = props
    const subLinksRow = subLinks.map((link, i)=> {
        return (
            <NavLink
                key={i}
                to={'/'+parentLink+'/'+link.link}
                className={({ isActive }) => {
                    return "sublink" + (isActive ? " activesublink" : "")
                }}  
            >
                {link.text}
            </NavLink>
        )
    })
    return (
        <div className="sublinks flex-col">
            {subLinksRow}
        </div>
    );
};

export default Sublinks;