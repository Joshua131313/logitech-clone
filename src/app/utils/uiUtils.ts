import { darkModeColors, defaultPalette, goldPalette, leafPalette, lightModeColors, midnightPalette, royalPalette } from "app/data/uiData";
import { TTheme } from "app/types/dbTypes/dbTypes";
import { IPalette, IThemeMode } from "app/types/uiTypes/uiInterfaces";

export const themeMode = (darkMode: boolean) : IThemeMode => {  
    return darkMode ? darkModeColors : lightModeColors
}   

export const colorPalette = (theme: TTheme) : IPalette => {
    let colorPalette: IPalette  
    switch (theme) {
        case 'default':
            colorPalette = defaultPalette
            break;
        case 'gold': 
            colorPalette = goldPalette
        break;
        case 'leaf': 
            colorPalette = leafPalette
        break;
        case 'midnight': 
            colorPalette = midnightPalette
        break;
        case 'royal': 
            colorPalette = royalPalette
    }
    return colorPalette
}
