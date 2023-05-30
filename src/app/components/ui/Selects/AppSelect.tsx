import { ISelectOption } from 'app/types/uiTypes/uiInterfaces';
import { TInputVariants } from 'app/types/uiTypes/uiTypes';
import React from 'react';
import '../Inputs/AppInput.css'

interface Props extends React.ComponentPropsWithoutRef<"select">{
    options: ISelectOption[],
    value?: string,
    setValue?: React.Dispatch<React.SetStateAction<any>>,
    text?: string;
    containerClassName?: string;
    variant?: TInputVariants
}

const AppSelect = (props: Props) => {
    const {
        options, 
        value, 
        setValue, 
        text, 
        containerClassName, 
        variant='primary',
        ...rest
    } = props
    
    const optionsRender = options.map(option=> {
        return (
            <option value={option.value} key={option.value}>
                {option.text}
            </option>
        )
    })
    return ( 
        <div className={`app-select flex-col ${containerClassName} ${variant}`}>
            {text && <span>{text}</span>}
            <select {...rest} onChange={e=> setValue?.(e.target.value)} value={value}>
              {optionsRender}
             </select>
        </div>
    );
};

export default AppSelect;
