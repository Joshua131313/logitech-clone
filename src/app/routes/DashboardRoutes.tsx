import DashboardContainer from 'app/containers/DashboardContainer/DashboardContainer';
import NotFound from 'app/pages/404/404';
import AddDevice from 'app/pages/AddDevice/AddDevice';
import Home from 'app/pages/Home/Home';
import LiftForMac from 'app/pages/LiftForMac/LiftForMac';
import MyAccount from 'app/pages/MyAccount/MyAccount';
import React from 'react';
import { Route, Routes } from 'react-router-dom';


interface Props {

}

const DashboardRoutes: React.FC<Props> = props => {
    return (
        <Routes>
            <Route element={<DashboardContainer />}>
                <Route index element={<Home />} />
                <Route path='add-device' element={<AddDevice />}/>
                <Route path='my-account' element={<MyAccount />} />
                <Route path='lift-for-mac' element={<LiftForMac />}/>
                {/* <Route path='invoices/*' >
                    <Route index element={<Invoices />} />
                    <Route path='create' element={<CreateInvoice />} />
                    <Route path='edit/:id' element={<EditInvoice />}/>
                    <Route path=':id' element={<Invoice />}/>
                </Route>
                <Route path='estimates/*'>
                    <Route index element={<Estimates />} />
                    <Route path='create' element={<CreateEstimate />}/>
                    <Route path='edit/:id' element={<EditEstimate />}/>
                    <Route path=':id' element={<Invoice type='estimates'/>}/>
                </Route>
                <Route path='emails/*' element={<EmailsRoutes />} />
                <Route path='contacts/*'>
                    <Route index element={<Contacts />} />
                    <Route path='create' element={<CreateContact />}/>
                    <Route path='edit/:id' element={<CreateContact pageType='Edit'/>}/>
                </Route>
                <Route path='notifications' element={<Notifications />} />
                <Route path="settings/*" element={<SettingsRoutes />} /> */}
                <Route path='*' element={<NotFound />}/>
            </Route>
        </Routes>
    );
};


export default DashboardRoutes;