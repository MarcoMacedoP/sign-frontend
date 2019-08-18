import { createMuiTheme } from "@material-ui/core";
import {
  mainColor,
  mainColorLight,
  mainColorDark,
  whiteColorLigth,
  secondaryColor,
  secondaryColorLigth,
  secondaryColorDark,
  blackColor,
  errorColor,
  errorColorDark,
  errorColorLigth,
  fontBody
} from "../global/styles/variables";

export const theme = createMuiTheme({
  typography : {
    fontFamily   : fontBody,
    fontSize     : 12,
    htmlFontSize : 16
  },
  palette    : {
    primary   : {
      light        : mainColorLight,
      main         : mainColor,
      dark         : mainColorDark,
      contrastText : whiteColorLigth
    },
    secondary : {
      light        : secondaryColorLigth,
      main         : secondaryColor,
      dark         : secondaryColorDark,
      contrastText : blackColor
    },
    error     : {
      light        : errorColorLigth,
      main         : errorColor,
      dark         : errorColorDark,
      contrastText : blackColor
    }
  },
  overrides  : {
    MuiCssBaseline : {
      "@global" : {
        "@font-face" : [ fontBody ]
      }
    }
  }
});
