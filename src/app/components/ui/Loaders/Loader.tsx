import React from 'react';
import { Logo } from '../Logo/Logo';
import './Loader.css'

interface Props {
    onlyLoader?: boolean
}

const Loader: React.FC<Props> = props => {
    const {onlyLoader} = props
    return (
        <div className={`${onlyLoader ? 'onlyLoader':''} loadingscreen`}>
          {!onlyLoader && <Logo />}
          <div className={`loadingdiv`}>
              <i className="fad fa-spinner-third fa-spin"></i>
          </div>
        </div>
    );
};


export default Loader;