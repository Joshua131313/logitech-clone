import React from 'react'
import AppButton, { AppButtonProps } from './AppButton'
import GoBack from '../NavigationWrappers/GoBack'

export interface Props extends AppButtonProps {
    warnBeforeExecute?: boolean
}

const BackButton = (props: Props) => {
    const {
        variant='secondary',
        text='Go back',
        icon='chevron-left',
        warnBeforeExecute,
        direction='reverse'
    } = props

    return (
        <GoBack
            warnBeforeExecute={warnBeforeExecute}
        >
            <AppButton 
                text={text}
                icon={icon}
                direction={direction}
                variant={variant}
            />
        </GoBack>
    )
}

export default BackButton