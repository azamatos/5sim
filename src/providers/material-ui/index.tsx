import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";

const MaterialThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0f0f0f",
      },
      secondary: {
        main: "#212121",
      },
    },

    typography: {
      fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;
