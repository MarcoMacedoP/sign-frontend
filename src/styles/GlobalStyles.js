import { createGlobalStyle } from "styled-components";
import {
  fontBody,
  blackColor,
  whiteColorLigth,
  mainColor
} from "./variables";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Oswald:300,400,500,700&display=swap');
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
};
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	border: none;
	outline: none;
	font-family: ${fontBody};
	color: ${blackColor};
}
html{
    font-size: 16px;
}
body{
	background-color: ${whiteColorLigth};
	overflow-x: hidden;
}
a{
	color: ${mainColor};
	text-decoration: underline;
	&:hover{
  		opacity: 0.6;
	}
}
`;
