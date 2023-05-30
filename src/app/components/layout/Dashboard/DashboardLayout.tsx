import Tabs from 'app/components/ui/Tabs/Tabs';
import { ITab } from 'app/types/uiTypes/uiInterfaces';
import React, { useContext } from 'react';
import { StoreContext } from 'StoreContext';
import './DashboardLayout.css'

interface Props {
    className?: string,
    title: string | React.ReactNode,
    HeaderElement?: React.ReactNode,
    tabs?: ITab[],
    children: React.ReactNode,
    badges?: any[]
}

const DashboardLayout: React.FC<Props> = (props) => {
    const {className, title, HeaderElement, tabs, badges} = props
    return (
        <div className={`dashboard-layout ${className} flex-col`}>
            <div className="layoutheader flex-row ac sb">
                {
                    typeof title === 'string' ?
                    <h2>{title}</h2>
                    :
                    <>
                    {title}
                    </>
                }
                {HeaderElement && HeaderElement}
            </div>
            {tabs &&
                <Tabs tabs={tabs} badges={badges}/>
            }
            <div  className="innerLayout" id='innerLayout'>
             {props.children}
            </div>
        </div>
    );
};

export default DashboardLayout;