import { handleLogout } from 'app/services/authServices';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props { 
    className?: string,
    children: React.ReactNode
}

const LogoutWrapper: React.FC<Props> = (props) => {
    const {className, children} = props

    return (
        <Link 
            className={className} 
            to='/' 
            onClick={()=> handleLogout()}
        >
            {children}
        </Link>
    );
};

export default LogoutWrapper;