
import React, { createContext, RefObject, useEffect, useRef, useState } from "react";
import { auth } from "./Fire";
// import { User  } from "firebase/auth/dist/auth";
// import { User } from "@firebase/auth/dist/auth-public";
import { Auth } from 'firebase/auth'
import firebase from 'firebase/compat'
import { IUser } from "app/types/dbTypes/dbInterfaces";
import { TCompact, TTheme } from "app/types/dbTypes/dbTypes";
import useDarkMode from "app/hooks/ui/useDarkMode";
import useUserInfo from "app/hooks/db/useUserInfo";
import useTheme from "app/hooks/ui/useTheme";
import useCompact from "app/hooks/ui/useCompact";
// import useUserInfo from "app/hooks/UserInfo";
// import { ICompact, ITheme, IUser } from "Interface";
// import useTheme from "app/hooks/Theme";
// import useCompact from "app/hooks/Compact";
// import useDarkMode from "app/hooks/DarkMode";
// import { colorPalette } from "app/utils/helpers";

interface IStore {
    user: firebase.User | null,
    setUser: (user: firebase.User | null)=> void,
    firebaseLoaded: boolean,
    openID: string,
    setOpenID: React.Dispatch<React.SetStateAction<string>>,
    userInfo: IUser | null,
    theme: TTheme,
    setTheme: React.Dispatch<React.SetStateAction<TTheme>>,
    compact: TCompact,
    setCompact: React.Dispatch<React.SetStateAction<TCompact>>,
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    authListener: ()=> void
} 

// @ts-expect-error
export const StoreContext = createContext<IStore>();

interface Props {
    children: React.ReactNode
}

const ContextAppProvider: React.FC<Props> = (props) => {
  const [user, setUser] = useState<any>(null);
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);
  const [openID, setOpenID] = useState<string>('')
  const userInfo = useUserInfo({})
  const [darkMode, setDarkMode] = useDarkMode({userInfo})
  const [theme, setTheme] = useTheme({userInfo})
  const [compact, setCompact] = useCompact({userInfo})
  const scrollableRef = useRef<HTMLDivElement | null>(null)
  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setUser(user);
      } else {
        setUser(null);
      }
      setFirebaseLoaded(true);
    });
  };


  useEffect(() => {
    authListener();
  }, [user]);

  return (
    <StoreContext.Provider
      value={{
         user,
         setUser,
         firebaseLoaded,
         openID,
         setOpenID,
         userInfo,
         theme,
         setTheme,
         compact,
         setCompact,
         darkMode,
         setDarkMode,
         authListener
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
export default ContextAppProvider;
