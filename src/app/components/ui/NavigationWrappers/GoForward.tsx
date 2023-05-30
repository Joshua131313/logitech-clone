import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode;
    warnBeforeExecute?: boolean;
}

const GoForward = (props: Props) => {
    const {className, warnBeforeExecute=false, ...rest} = props
    const navigate = useNavigate()
    return (
        <div
            className={`go-forward navigation-button ${className}`} 
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

export default GoForward;