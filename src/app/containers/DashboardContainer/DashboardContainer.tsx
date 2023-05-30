import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import './DashboardContainer.css'
import Navbar from 'app/components/layout/Navbar/Navbar';
import { StoreContext } from 'StoreContext';
import Sidebar from 'app/components/layout/Sidebar/Sidebar';
import RightSidebar from 'app/components/layout/RightSidebar/RightSidebar';

interface Props {

}

const DashboardContainer = (props: Props) => {
    const {
        darkMode,
    } = useContext(StoreContext)
    return ( 
        <div className={`dashboardcontainer ${darkMode ? 'dark-mode' : ''}`}>
                <Outlet />
            {/* <RightSidebar /> */}
        </div>
    );
};


export default DashboardContainer;