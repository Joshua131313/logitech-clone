import { IThemeMode, ISelectOption, IPalette } from "app/types/uiTypes/uiInterfaces"

export const defaultPalette: IPalette = {
    themeColor: '#814efa',
    themeColorHover: '#814efa',
    lightThemeBg: '#f9f6ff',
    secondColor: '#e6dcfe',
    thirdColor: '#e6dcfe',
    lightThemeShadow: '0 0 6px 2px #73a9ef2e'
}
export const midnightPalette: IPalette = {
    themeColor: '#191970',
    themeColorHover: '#814efa',
    lightThemeBg: '#e8e8ff',
    secondColor: '#6464DC',
    thirdColor: '#3F3FD4',
    lightThemeShadow: '0 0 6px 2px #7a73ef2e'
}
export const goldPalette: IPalette = {
    themeColor: '#f6ba04',
    themeColorHover: '#E3AE09',
    lightThemeBg: '#fff3d0',
    secondColor: '#F6C324',
    thirdColor: '#F8CF50',
    lightThemeShadow: '0 0 6px 2px #564f37'
}
export const royalPalette: IPalette = {
    themeColor: '#675B7F',
    themeColorHover: '#534a66',
    lightThemeBg: '#ece4f9',
    secondColor: '#958BAB',
    thirdColor: '#7D7098',
    lightThemeShadow: '0 0 6px 2px #5f5f8169'
}
export const leafPalette: IPalette = {
    themeColor: '#38B261',
    themeColorHover: '#2a7d46',
    lightThemeBg: '#dcffe7',
    secondColor: '#73D393',
    thirdColor: '#50C878',
    lightThemeShadow: '0 0 6px 2px #79ef732e'
}
export const darkModeColors: IThemeMode = {
    borderColor: '#555',
    grayText: '#fff',
    lightGrayText: '#f8f8f8',
    lightShadow: '0px 0px 7px 1px rgb(0 0 0 / 24%)',
    plainBg: '#222',
    tableBorderColor: '#5e5e5e',
    themeBg: '#333'
}
export const lightModeColors : IThemeMode = {
    borderColor: '#e4ecfb',
    grayText: '#696e93',
    lightGrayText: 'rgb(134, 134, 134)',
    lightShadow: '0px 0px 7px 1px rgb(238, 238, 238)',
    plainBg: '#fbfbfb',
    tableBorderColor: '#d5deef',
    themeBg: '#f8f8ff'
}
export const themes: ISelectOption[] = [
    {
        text: 'Default',
        value: 'default'
    },
    {
        text: 'Midnight',
        value: 'midnight'
    },
    {
        text: 'Gold',
        value: 'gold'
    },
    {
        text: 'Royal',
        value: 'royal'
    },
    {
        text: 'Leaf',
        value: 'leaf'
    }
]