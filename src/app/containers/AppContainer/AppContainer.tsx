// import UI from "app/pages/UI/UI";
import AppLoader from "app/components/ui/Loaders/AppLoader";
import AuthRoutes from "app/routes/AuthRoutes";
import DashboardRoutes from "app/routes/DashboardRoutes";
import React, { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { StoreContext } from "StoreContext";
// import { EmailVerification } from "app/auth/EmailVerification";
// import { ForgotPassword } from "app/auth/ForgotPassword";
// import { Login } from "app/auth/Login";
// import { Register } from "app/auth/Register";
// import UserManagement from "app/auth/UserManagement";
export const AppContainer = () => {
  const store  = useContext(StoreContext);

  return (
    <>
      {(store?.firebaseLoaded) ? (
        <Routes>
          {store?.user ? (
            <Route path="/*" element={<DashboardRoutes />} />
          ) : (
            <Route path="/*" element={<AuthRoutes />} />
          )}
        </Routes>
      ) : (
        <AppLoader />
      )}
    </>
  );
};
