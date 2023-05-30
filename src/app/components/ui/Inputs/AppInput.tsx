import { TInputVariants } from 'app/types/uiTypes/uiTypes';
import React, { useEffect, useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import './AppInput.css'

interface Props extends React.ComponentPropsWithoutRef<"input">{
    value?: any,
    setValue?: React.Dispatch<React.SetStateAction<any>>,
    text?: string,
    shouldFocusOnKey?: boolean,
    icon?: string;
    rightIcon?: string;
    showClear?: boolean;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    containerClassName?: string;
    variant?: TInputVariants
}

export const AppInput: React.FC<Props> = (props) => {
    const { 
        value, 
        setValue, 
        text, 
        shouldFocusOnKey, 
        containerClassName,
        icon,
        showClear,
        inputRef,
        variant='primary',
        rightIcon,
        ...rest } = props

    return (
        <div className={`app-input ${containerClassName} ${variant}`}>
            {text && 
                <span>{text}</span>
            }
            {
                icon && <i className={`fal fa-${icon}`} />
            }
            <input 
                ref={inputRef}
                style={icon ? {paddingLeft: 35} : {}}
                value={value} 
                onChange={(e) => { 
                    setValue?.(e.target.value)
                }} 
                {...rest}
            />
            {
                rightIcon && (!showClear) && 
                <i 
                    className={`fal fa-${rightIcon} right-icon`}
                />
            }
            {
                (showClear && value) && 
                <i 
                    className='fal fa-times clearicon' 
                    onClick={()=> setValue?.('')} 
                />
            }
        </div>
    )
}
