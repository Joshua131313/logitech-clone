import { TConnectionType } from "./uiTypes";

export interface ISelectOption  {
    value: string;
    text: string;
}

export interface ITab { 
    text: string, 
    icon: string, 
    link: string, 
}
// dropdown interface / types
export interface Option {
    title: boolean,
    link: string,
    icon: string,
    text: string,
    logout: boolean,
    onClick: ()=> void,
} 
type ITitleOption = Pick<Option, 'title'>
export type ILinkOption = Pick<Option, 'link' | 'text' | 'icon'>
type ILogoutOption = Pick<Option, 'logout'>
type IDefautOption = Pick<Option, 'icon' | 'text' | 'onClick'>
export type IDropdownOption = ITitleOption  | ILinkOption | ILogoutOption | IDefautOption
// end here

export interface IThemeMode {
    grayText: string;
    lightGrayText: string;
    themeBg: string;
    plainBg: string;
    borderColor: string;
    tableBorderColor: string;
    lightShadow: string;
}
export interface IPalette  {
    themeColor: string,
    themeColorHover: string,
    lightThemeBg: string,
    secondColor: string,
    thirdColor: string;
    lightThemeShadow: string;
}
export interface IAuthStates {
    name: string,
    email: string,
    password: string
}
export interface IAuthStateSetter {
    setPasswordError: (p: string)=> void,
    setEmailError: (p: string)=> void,
    setLoading: (p: boolean)=> void
}
export interface IAuthBtnLink {
    link: string,
    text: string,
}
export interface IAuthBtn {
    text: string,
    onClick: (p1: IAuthStates, p2: IAuthStateSetter)=> void,
}
export interface ILink {
    text: string;
    icon: string;
    link: string;
}
export interface ILinkWithSublinks extends ITab { 
    subLinks?: ITab[] 
}
export interface IDevice {
    src: string;
    connectionType: TConnectionType;
    batteryPercentage: number;
}
export interface IAddDeviceOption {
    title: string;
    subTitle: string;
    img: string;
}