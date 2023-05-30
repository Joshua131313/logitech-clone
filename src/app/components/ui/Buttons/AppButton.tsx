import React from 'react'
import './AppButton.css'

// interface Props {
//   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void,
//   className?: string,

// }

export interface AppButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  icon?: string;
  text?: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'gray';
  direction?: 'reverse'
}

const AppButton: React.FC<AppButtonProps> = (props) => {
  const {
    onClick, 
    text, 
    className, 
    icon, 
    disabled, 
    loading, 
    variant='primary', 
    direction,
    ...rest
  } = props
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`app-button ${className} ${variant} ${direction}`} 
      onClick={(e)=> !disabled && onClick?.(e)}>
        <span>{text}</span>
        {
            loading ? 
            <i className='fal fa-spin fa-spinner-third'></i>
            :
            icon && 
            <i className={`fal fa-${icon}`}></i>
        }
    </button>
  )
}


export default AppButton