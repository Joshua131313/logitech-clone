import React from "react";
import "./providers.css";
import { useNavigate } from "react-router-dom";
import { Providers } from "Fire";
import { loginwithProvider } from "app/services/authServices";

interface Props {

}

const GoogleProvider: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="googlebtn"
      onClick={() =>
        loginwithProvider(Providers.google)
      }
    >
      <img
        src={require('app/assets/google-logo.png')}
        alt="google logo"
      />
      <span>Continue with Google</span>
    </div>
  );
};
export default GoogleProvider;
