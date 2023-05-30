import { EmailVerification } from 'app/auth/EmailVerification';
import { ForgotPassword } from 'app/auth/ForgoPassword';
import { Login } from 'app/auth/Login';
import { Register } from 'app/auth/Register';
import UserManagement from 'app/auth/UserManagement';
import NotFound from 'app/pages/404/404';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

interface Props {

}

const AuthRoutes: React.FC<Props> = props => {
    return (
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/user-management/*" element={<UserManagement />} />
          <Route path='*' element={<NotFound className='full-page'/>} /> 
        </Routes>
    );
};


export default AuthRoutes;