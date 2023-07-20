import AppHelmet from 'app/components/ui/AppHelmet'
import React from 'react'
import MousePageTemplate from '../MousePageTemplate/MousePageTemplate'
import './LiftForMac.css'

export interface Props {

}

const LiftForMac = (props: Props) => {
    const {

    } = props

    return (
        <MousePageTemplate
            title='LIFT for Mac'
            className={`lift-for-mac`}
        >
            <AppHelmet title='LIFT for Mac'/>
        </MousePageTemplate>
    )
}

export default LiftForMac