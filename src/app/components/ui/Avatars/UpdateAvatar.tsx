import React, { useEffect, useState } from 'react';
import './Avatar.css'

interface Props {
    avatar: File | null;
    setAvatar: React.Dispatch<React.SetStateAction<File | null>>;
    defaultValue?: string;
}

const UpdateAvatar = (props: Props) => {
    const {avatar, setAvatar, defaultValue} = props
    const [avatarPreview, setAvatarPreview] = useState<string>(defaultValue || '')

    useEffect(()=> {
        if(defaultValue) {
            setAvatarPreview(defaultValue)
        }
    }, [defaultValue])
    useEffect(()=> {
        if(avatar) {
            setAvatarPreview(URL.createObjectURL(avatar))
        }
    }, [avatar])

    return (
        <label className='update-avatar user-avatar'>
            <img 
                src={avatarPreview ?? require('app/assets/profile-placeholder.png')} 
                alt="user-avatar" 
                className="avatar-img" 
            />
            <i 
                className='fa fa-camera'
            >
            </i>    
            <input 
                onChange={(e)=> setAvatar(e.target.files![0])}
                type="file" 
                style={{display: 'none'}} 
                accept='image/*'
            />
        </label>
    );
};

export default UpdateAvatar;