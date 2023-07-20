import Navbar from 'app/components/layout/Navbar/Navbar'
import AppHelmet from 'app/components/ui/AppHelmet'
import DevicePreview from 'app/components/ui/DevicePreview/DevicePreview'
import { auth } from 'Fire'
import React from 'react'
import './Home.css'

export interface Props {

}

const Home = (props: Props) => {
    const {

    } = props

    return (
        <div className={`home`}>
            <AppHelmet 
                title='Home'
            />
            <Navbar />
            <div className="devices-container flex-wrap">
                <DevicePreview 
                    link='lift-for-mac'
                    device={{
                        src: require('app/assets/lift-mac.png'),
                        batteryPercentage: 100,
                        connectionType: 'bluetooth'
                    }}
                />
            </div>
        </div>
    )
}

export default Home