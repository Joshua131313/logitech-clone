import AppButton from 'app/components/ui/Buttons/AppButton';
import { Logo } from 'app/components/ui/Logo/Logo';
import LogoutWrapper from 'app/components/ui/LogoutWrapper/LogoutWrapper';
import { sidebarLinks } from 'app/data/generalData';
import React from 'react';
import './Sidebar.css';
import SidebarLink from './SidebarLink';
import { ReactComponent as SImg } from './SidebarImg.svg';

const Sidebar: React.FC = () => {
	const sidebarLinksRender = sidebarLinks.map((link, i) => {
		return (
            <SidebarLink
                subLinks={link.subLinks} 
                link={link.link} 
                icon={link.icon} 
                label={link.text}
                key={i} 
            />
        )
	});

	return (
		<div className="dashboardsidebar flex-col sb">
			<div className="flex-col">
                <Logo />
                <div className="sidebarlinks flex-col">
                    {sidebarLinksRender}
                </div>
            </div>
            <div className="flex-col bottomsection">
                <LogoutWrapper>
                    <AppButton text='Logout'/>
                </LogoutWrapper>
                <div className="img-loaded sidebar-img">
                    <SImg />
                </div>
            </div>
		</div>
	);
};


export default Sidebar;
