import AppButton from 'app/components/ui/Buttons/AppButton';
import { User } from 'app/components/ui/User/Me';
import React, { useState } from 'react';
import './Navbar.css'
import { Tooltip } from 'react-tooltip'
import AppTooltip from 'app/components/ui/AppTooltip/AppTooltip';
import { getTimeofDay } from 'app/utils/dateUtils';
import { Link } from 'react-router-dom';
import AppModal from 'app/components/ui/AppModal/AppModal';
import AppSwitch from 'app/components/ui/Switches/AppSwitch';
import AccountModal from 'app/components/ui/AppModal/AccountModal';


interface Props {

}

const Navbar = (props: Props) => { 

    const [showAccountModal, setShowAccountModal] = useState<boolean>(false)

    return (
        <>
        <div className='navbar flex-row sb ac'>
            <h1>Good {getTimeofDay()}</h1>
            <div className="controls flex-row ac">
                <Link
                    to={'add-device'}
                >
                    <AppButton 
                        direction='reverse'
                        text='ADD DEVICE'
                        icon='fa fa-plus'
                        variant='secondary'
                    />
                </Link>
                <Link
                    to={'smart-actions'}
                >
                    <AppButton 
                        direction='reverse'
                        text='SMART ACTIONS'
                        icon='fa fa-redo'
                        variant='secondary'
                    />
                </Link>
                <div className="divider"></div>
                <AppTooltip
                    tooltipRender='Account'
                    anchorSelect='.nav-user'
                >
                    <div 
                        onClick={()=> {
                            setShowAccountModal(!showAccountModal)
                        }}
                    >
                        <User 
                            className='nav-user app-icon'
                            showName={false}
                        />
                    </div>
                </AppTooltip>
                <AppTooltip  
                    tooltipRender='Settings'
                    anchorSelect='.fa-cog'
                >
                    <i className='fal fa-cog app-icon'></i>
                </AppTooltip>
            </div>
        </div>
        <AccountModal 
            showModal={showAccountModal}
            setShowModal={setShowAccountModal}
        />
        </>
    );
};

export default Navbar;