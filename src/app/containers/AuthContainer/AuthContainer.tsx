import AppButton from "app/components/ui/Buttons/AppButton";
import { AuthInput } from "app/components/ui/Inputs/AuthInput";
import { Logo } from "app/components/ui/Logo/Logo";
import { clearAuthState } from "app/services/authServices";
import { IAuthBtn, IAuthBtnLink } from "app/types/uiTypes/uiInterfaces";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "StoreContext";
import "./AuthContainer.css";
import FacebookProvider from "./providers/FacebookProvider";
import GoogleProvider from "./providers/GoogleProvider";

interface Props {
  title?: string;
  msg?: string;
  isLogIn?: boolean;
  isRegister?: boolean;
  isForgotPassword?: boolean;
  isEmailVerification?: boolean;
  isResetPassword?: boolean;
  btnText1?: IAuthBtnLink;
  btnText2?: IAuthBtnLink;
  backBtn?: boolean;
  mainBtn: IAuthBtn;
  mainBtnLoading?: boolean;
}

const AuthContainer: React.FC<Props> = (props) => {
  const store = useContext(StoreContext);
  const {
    title = "Sign in",
    isLogIn,
    isRegister,
    btnText1,
    btnText2,
    mainBtn,
    isForgotPassword,
    isEmailVerification,
    isResetPassword,
    backBtn,
    msg,
    mainBtnLoading
  } = props;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const states = {
    name,
    email,
    password,
  };
  const setStates = {
    setPasswordError,
    setEmailError,
    setLoading,
  };
  // useEffect(() => {
  //   if (store?.user) {
  //     navigate("/dashboard", { replace: true });
  //   }
  // }, [store?.user]);

  return (
    <div className={`auth-container `}>
      <div className="left-side">
        <Logo showLogoName/>
        <div className="img-loaded auth-bg">
            <div className="inner-auth-bg"></div>
        </div>
      </div>
      <div className="right-side">
        <div className="inner-right-side">
          <div className="header flex-col">
            <h2>{title}</h2>
          </div>
          {(isLogIn || isRegister) && (
           <>
            <div className="auth-providers">
              <GoogleProvider />
              <FacebookProvider />
            </div>
            <div className="text-separator">
              <div className="border"></div>
              <span>Or continue with email</span>
            </div>
           </>
          )}
          <form
            className="authform flex"
            onSubmit={(e) => {
              mainBtn.onClick(states, setStates);
              e.preventDefault();
            }}
          >
            {isEmailVerification ? (
              <span className="verify-message">{msg}</span>
            ) : (
              <div className="form-inputs flex">
                {!isLogIn && !isForgotPassword && !isResetPassword && (
                    <AuthInput
                        placeholder="Full name"
                        value={name}
                        setValue={setName}
                    />
                )}
                {
                !isResetPassword && 
                    <AuthInput
                        placeholder="Email"
                        value={email}
                        setValue={setEmail}
                        error={emailError}
                    />
                }
                {!isForgotPassword && (
                    <AuthInput
                        type="password"
                        placeholder={`${isResetPassword ? 'New password' : 'Password'}`}
                        setValue={setPassword}
                        value={password}
                        error={passwordError}
                    />
                )}
              </div>
            )}
            <div className="form-btns flex-col">
              <div className="submit-button-container">
                  <AppButton
                      icon="arrow-right"
                      text={mainBtn.text}
                      loading={mainBtnLoading}
                      onClick={(e) => {
                        e.preventDefault();
                        mainBtn.onClick(states, setStates);
                      }}
                    />
                    <label className="keep-signed-in">                    
                      <input type="checkbox" onChange={(e)=> {
                        clearAuthState(e.target.checked)
                      }}/>
                      <span>Remember me?</span>
                    </label>
                </div>
                <div className="text-btns flex">
                  {backBtn ? (
                    <span onClick={() => navigate(-1)} className="textbtn">
                      Go back
                    </span>
                  ) : (
                    btnText1 && (
                      <Link to={btnText1.link} className="textbtn">
                        {btnText1.text}
                      </Link>
                    )
                  )}
                  {btnText2 && (
                    <Link to={btnText2.link && btnText2.link} className="textbtn">
                      {btnText2.text}
                    </Link>
                  )}
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthContainer;
