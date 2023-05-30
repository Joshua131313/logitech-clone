import React from 'react'
import AppButton, { AppButtonProps } from './AppButton'
import GoBack from '../NavigationWrappers/GoBack'

export interface Props extends AppButtonProps {
    warnBeforeExecute?: boolean
}

const ForwardButton = (props: Props) => {
    const {
        variant='secondary',
        text='Go forward',
        icon='chevron-right',
        warnBeforeExecute,
    } = props

    return (
        <GoBack
            warnBeforeExecute={warnBeforeExecute}
        >
            <AppButton 
                text={text}
                icon={icon}
                variant={variant}
            />
        </GoBack>
    )
}

export default ForwardButton