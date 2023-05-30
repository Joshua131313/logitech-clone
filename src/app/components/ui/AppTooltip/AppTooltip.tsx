import React from 'react'
import { Tooltip, ITooltip } from 'react-tooltip';
import './AppTooltip.css'

export interface Props extends ITooltip {
    tooltipRender: React.ReactNode;
    children: React.ReactNode;
    anchorSelect: string;
}

const AppTooltip = (props: Props) => {
    const {
        tooltipRender,
        anchorSelect,
        ...rest
    } = props

    return (
        <>
        {props.children}
        <Tooltip  
            {...rest} 
            anchorSelect={anchorSelect}
            style={{textAlign: 'center', fontSize: 12}}
        >
            {tooltipRender}
        </Tooltip>   
        </>   
    )
}

export default AppTooltip