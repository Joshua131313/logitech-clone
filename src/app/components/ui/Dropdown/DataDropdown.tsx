import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

interface Props {
    title: string,
    to: string,
    children: React.ReactNode
}

const DataDropdown: React.FC<Props> = props => {
    const {title, to} =  props
    return (
        <div className='data-dropdown'>
            <div className="data-dropdown-header flex-row sb ac">
                <h4>{title}</h4>    
                <Link to={to}>View all</Link>
            </div>
            <div className="data">
                {props.children}
            </div>            
        </div>
    );
};


export default DataDropdown;