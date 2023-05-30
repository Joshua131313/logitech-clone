import React from 'react';
import { Slide, ToastContainer, ToastContainerProps } from 'react-toastify';
import './Toasts.css'

interface Props extends ToastContainerProps {}

const Toasts = (props: Props) => {
    const { 
        autoClose = 3000,
        closeOnClick = true,
        draggable = false,
        hideProgressBar = true,
        transition=Slide,
        pauseOnFocusLoss = true,
        newestOnTop = true,
        ...rest
     } = props

    const CloseButton = ({closeToast}: any) => {
       return (
        <i 
            className='fal fa-times close-toast-icon'
            onClick={closeToast}
         />
       )
    }

    return (
        <ToastContainer 
            autoClose={autoClose}
            closeOnClick={closeOnClick}
            draggable={draggable}
            hideProgressBar={hideProgressBar}
            transition={transition}
            pauseOnFocusLoss={pauseOnFocusLoss}
            newestOnTop={newestOnTop}
            closeButton={CloseButton}   
            {...rest}
        />
    );
};

Toasts.propTypes = {
    
};

export default Toasts;