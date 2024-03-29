import { IDevice } from 'app/types/uiTypes/uiInterfaces';
import React from 'react'
import { Link } from 'react-router-dom';
import BatteryButton from '../Buttons/BatteryButton';
import ImgLoaded from '../ImgLoaded/ImgLoaded';
import './DevicePreview.css'

export interface Props {
    device: IDevice;
    link: string;
}

const DevicePreview = (props: Props) => {
    const {
        device,
        link
    } = props

    return (
        <div className={`device-preview flex-col`}>
            <Link to={link}>
                <ImgLoaded 
                    src={device.src} 
                />
            </Link>
            <BatteryButton 
                {...device}
            />
        </div>
    )
}

export default DevicePreview