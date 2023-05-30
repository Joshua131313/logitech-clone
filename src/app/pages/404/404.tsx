import AppButton from 'app/components/ui/Buttons/AppButton';
import ImgLoaded from 'app/components/ui/ImgLoaded/ImgLoaded';
import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'

interface Props {
    className?: string
}

const NotFound = (props: Props) => {
    const {className} = props
    return (
        <div className={`not-found ${className}`}>
            <div className="inner-not-found">
                <ImgLoaded 
                    src={require('app/assets/not-found.png')}
                />
                <h1>Page not found</h1>
                <span>Error 404. The page you are looking for does not exist.</span>
                <Link to={'/'}>
                    <AppButton text='Back home' icon='home'/>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;