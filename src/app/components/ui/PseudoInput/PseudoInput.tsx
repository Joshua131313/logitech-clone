import React from 'react';
interface Props {
    text?: string;
    placeholder?: string;
    children: React.ReactNode;
    className?: string
}
const PseudoInput = (props: Props) => {
    const {className, text, placeholder} = props
    return (
        <div className={`${className} pseudo-input-container`}>
            <span className="pseudo-text">{text}</span>
            <div className="pseudo-input flex-row sb ac">
                <span>{placeholder}</span>
                {props.children}
            </div>
        </div>
    );
};

export default PseudoInput;