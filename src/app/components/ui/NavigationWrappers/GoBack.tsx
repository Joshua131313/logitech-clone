import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface GoBackProps extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode;
    warnBeforeExecute?: boolean;
}

const GoBack = (props: GoBackProps) => {
    const {className, warnBeforeExecute=false, ...rest} = props
    const navigate = useNavigate()
    return (
        <div
            className={`go-back navigation-button ${className}`} 
            onClick={()=>{
                if(warnBeforeExecute) {
                    if(window.confirm('Going back will reset your info.')) {
                        navigate(-1)
                    }
                }
                else {
                    navigate(-1)
                }
            }} 
            {...rest}
        >
            {props.children}
        </div>
    );
};

export default GoBack;