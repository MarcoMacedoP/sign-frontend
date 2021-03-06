import {  css } from "styled-components";
import {  cellphoneMediaQuery } from "./mediaQuerys";
export const mainColor = "#ff82ee";
export const mainColorDark = "#ca50bb";
export const mainColorLight = "#ffb5ff";
export const mainColorTransparent = "rgba(255,130,238, 0.5)";

export const secondaryColor = "#52b3ab";
export const secondaryColorLigth = "#86e5dd";
export const secondaryColorDark = "#13837c";

export const whiteColor = "#ebebeb";
export const whiteColorDark = "#cecece";
export const whiteColorLigth = "#f8f8f8";

export const blackColor = "#323635";
export const blackColorLigth = "#707070";
export const blackColorTransparent = "rgba(112, 112, 112, 0.5)";

export const positiveStatusColor = "#36c24d";
export const pendingStatusColor = "#ffe684";
export const errorColor = "#ff5151";
export const errorColorLigth = "#ff867e";
export const errorColorDark = "#c50b28";

export const fontTitle = "'Oswald', sans-serif";
export const fontBody = "'Lato', sans-serif";

export const appPadding = ()=>css`
    padding: 1rem 2rem;
    @media ${cellphoneMediaQuery}{
        padding: 1rem;
    }


`;
export const appShadow = "0 -4px 13px 0 rgba(50, 54, 53, 0.3)";
export const webPadding = "5rem 3rem";

export const makeGradient = color => `linear-gradient(180deg, ${whiteColorLigth} 61.07%, rgba(255, 255, 255, 0) 100%), ${color});
`;
