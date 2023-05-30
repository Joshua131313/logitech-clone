import { IUser } from 'app/types/dbTypes/dbInterfaces';
import { themeMode } from 'app/utils/uiUtils';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
    userInfo: IUser | null
}

const useDarkMode = (props: Props): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const { userInfo } = props
    const [darkMode, setDarkMode] = useState<boolean>(userInfo?.darkMode || false)
    const location = useLocation()
    
    useEffect(()=> {
        if(userInfo) {
            setDarkMode(userInfo.darkMode)
        }
    }, [userInfo, location])
    useEffect(()=> {
       let { 
            borderColor, 
            grayText,
            lightGrayText,
            lightShadow,
            plainBg,
            tableBorderColor,
            themeBg
        } = themeMode(darkMode) 
            document.documentElement.style.setProperty('--gray-text', grayText)
            document.documentElement.style.setProperty('--light-gray-text', lightGrayText)
            document.documentElement.style.setProperty('--theme-bg', themeBg)
            document.documentElement.style.setProperty('--plain-bg', plainBg)
            document.documentElement.style.setProperty('--border-color', borderColor)
            document.documentElement.style.setProperty('--table-border-color', tableBorderColor)
            document.documentElement.style.setProperty('--light-shadow', lightShadow)
    }, [darkMode, userInfo])

    return [darkMode, setDarkMode]
};


export default useDarkMode;