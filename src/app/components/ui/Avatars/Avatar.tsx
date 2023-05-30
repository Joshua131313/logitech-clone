import React from 'react';
import './Avatar.css'

interface Props {
    avatar: string;
}

const Avatar = (props: Props) => {
    const {avatar} = props
    return (
        <label className='user-avatar'>
            <img 
                src={(typeof avatar === 'string' && avatar !== '') ? avatar : avatar ? URL.createObjectURL(avatar) : require('assets/profile-placeholder.png')} 
                alt="user-avatar" 
                className="avatar-img" 
            />
        </label>
    );
};

export default Avatar;