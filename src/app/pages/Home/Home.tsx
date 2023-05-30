import Navbar from 'app/components/layout/Navbar/Navbar'
import DevicePreview from 'app/components/ui/DevicePreview/DevicePreview'
import React from 'react'
import './Home.css'

export interface Props {

}

const Home = (props: Props) => {
    const {

    } = props

    return (
        <div className={`home`}>
            <Navbar />
            <div className="devices-container flex-wrap">
                <DevicePreview 
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