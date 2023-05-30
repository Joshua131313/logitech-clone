import React from "react";
import "./providers.css";
import { Providers } from "Fire";
import { loginwithProvider } from "app/services/authServices";

interface Props {}

const FacebookProvider: React.FC<Props> = (props) => {
  return (
    <div
      className="googlebtn facebookbtn"
      onClick={() =>
        loginwithProvider(Providers.facebook)
      }
    >
      <img
        src={require('app/assets/facebook-logo.png')}
        alt="facebook-logo"
      />
      <span>Continue with Facebook</span>
    </div>
  );
};
export default FacebookProvider;
