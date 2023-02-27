import { createTheme, Theme } from "@mui/material";

export interface ITheme {
  theme: Theme;
}

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#424242",
    },
    error: {
      main: "#b71c1c",
    },
    info: {
      main: "#8e24aa",
    },
    warning: {
      main: "#ffeb3b",
    },
  },

  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
