import { IUser } from 'app/types/dbTypes/dbInterfaces';
import { TTheme } from 'app/types/dbTypes/dbTypes';
import { colorPalette } from 'app/utils/uiUtils';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
    userInfo: IUser | null
}

const useTheme = (props: Props): [TTheme, React.Dispatch<React.SetStateAction<TTheme>>] => {
    const { userInfo } = props
    const [theme, setTheme] = useState<TTheme>(userInfo?.theme || 'default')
    const location = useLocation()
    
    const executeToggle = (value: TTheme) => {
        let { 
            lightThemeBg, 
            secondColor, 
            themeColor, 
            themeColorHover, 
            thirdColor, 
            lightThemeShadow 
        } = colorPalette(value)
        document.documentElement.style.setProperty('--theme-color', themeColor)
        document.documentElement.style.setProperty('--theme-color-hover', themeColorHover)
        document.documentElement.style.setProperty('--light-theme-bg', lightThemeBg)
        document.documentElement.style.setProperty('--second-color', secondColor)
        document.documentElement.style.setProperty('--third-color', thirdColor)
        document.documentElement.style.setProperty('--light-theme-shadow', lightThemeShadow)
        document.querySelector("meta[name='theme-color']")?.setAttribute("content", themeColor)
    }
    useEffect(()=> {
        if(userInfo) {
            setTheme(userInfo.theme)
        }
    }, [userInfo, location])
    useEffect(()=> {
        if(location.pathname !== '/settings') {
            executeToggle(userInfo?.theme || 'default')
        }
    }, [location])
    useEffect(()=> {
       executeToggle(theme)
    }, [theme, userInfo])

    return [theme, setTheme]
};


export default useTheme;