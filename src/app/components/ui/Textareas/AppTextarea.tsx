import { TInputVariants } from 'app/types/uiTypes/uiTypes';
import React, { useEffect, useRef } from 'react'
import ReactTextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'
import '../Inputs/AppInput.css'
import './AppTextarea.css'

interface Props extends TextareaAutosizeProps {
    setValue?: React.Dispatch<React.SetStateAction<string>>,
    text?: string,
    shouldFocusOnKey?: boolean,
    containerClassName?: string;
    variant?: TInputVariants
}

export const AppTextarea: React.FC<Props> = (props) => {
    const { 
        value, 
        setValue, 
        text, 
        shouldFocusOnKey, 
        containerClassName,
        ...rest 
    } = props
    let textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (shouldFocusOnKey) {
            window.onkeydown = (e) => {
                if (e.ctrlKey && e.key === 'm') {
                     textareaRef.current?.focus()
                }
            }
        }
    }, [shouldFocusOnKey])

    return (
        <div className={`app-input app-textarea ${containerClassName}`}>
            {text && 
             <span>{text}</span>
            }
            <ReactTextareaAutosize 
                ref={textareaRef}
                onChange={(e) => { 
                    setValue?.(e.target.value)
                }} 
                {...rest} 
            />
        </div>
    )
}