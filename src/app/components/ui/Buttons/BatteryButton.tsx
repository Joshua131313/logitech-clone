import { TConnectionType } from 'app/types/uiTypes/uiTypes';
import React from 'react'
import { Tooltip } from 'react-tooltip';
import AppTooltip from '../AppTooltip/AppTooltip';

export interface Props {
    batteryPercentage: number;
    connectionType: TConnectionType
}

const BatteryButton = (props: Props) => {
    const {
        batteryPercentage,
        connectionType
    } = props   

    return (
        <div className="battery-button">
            <span>
                {batteryPercentage}%
            </span>
            <i className='fa battery-icon fa-battery-full'></i>
  
            <AppTooltip
                place='bottom'
                anchorSelect='.battery-button'
                tooltipRender={
                <>
                    Battery level {batteryPercentage}%
                    <br />
                    Connected via {connectionType}
                </>
                }
            >
                <i className={
                    `fab fa-${connectionType === 'USB' ? 'usb' : 'bluetooth-b'}`
                }></i>  
            </AppTooltip>      
        </div>
    )
}

export default BatteryButton