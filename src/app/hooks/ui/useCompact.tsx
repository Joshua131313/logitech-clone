import { IUser } from 'app/types/dbTypes/dbInterfaces';
import { TCompact } from 'app/types/dbTypes/dbTypes';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
    userInfo: IUser | null
}

const useCompact = (props: Props): [TCompact, React.Dispatch<React.SetStateAction<TCompact>>] => {
    const { userInfo } = props
    const [compact, setCompact] = useState<TCompact>(userInfo?.compact || 'default')
    const location = useLocation()
    
    useEffect(()=> {
        document.body.className = compact
    }, [compact])
    useEffect(()=> {
        if(userInfo) {
            setCompact(userInfo.compact)
        }
    }, [userInfo, location])

    return [compact, setCompact]
};


export default useCompact;