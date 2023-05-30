import React from 'react';
import { Logo } from '../Logo/Logo';
import './Loader.css'

interface Props {
}

const AppLoader: React.FC<Props> = props => {
    const dots = [
        'one',
        'two',
        'three',
        'four',
        'five'
    ]
    const dotsRender = dots.map((dot, i)=> {
        return (
            <div 
                key={i}
                className={`dot ${dot}`} 
                style={{animationDelay: (i * 0.3)+'s'}}
            />
        )
    })
    return (
        <div className={`loadingscreen app-loader`}>
          <div className="loaderpart">
              <Logo />
              <div className="dots-container">
                {dotsRender}
              </div>
          </div>
          <div className="appinfo"></div>
        </div>
    );
};


export default AppLoader;