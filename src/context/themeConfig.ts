import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1712,
    },
  },
  palette: {
    background: {
      default: "#111111",
    },
    text: {
      primary: "#f5f5f5",
    },
    primary: {
      main: "#a88041",
    },
    secondary: {
      main: "#333333",
    },
    grey: {
      100: "#111111",
      200: "#222222",
      300: "#333333",
      400: "#444444",
      500: "#555555",
      600: "#666666",
      700: "#777777",
      800: "#888888",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
      fontSize: 14,
      letterSpacing: 0,
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      WebkitTextSizeAdjust: "100%",
    },
    h1: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: "56px",
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "38px",
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "38px",
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "19px",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1400px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "textTransform": "none",
          "&:focus": {
            outline: "none",
          },
        },
        text: {
          "backgroundColor": "transparent",
          "&:hover": {
            color: "#a88041",
          },
        },
        outlined: {
          "borderColor": "#c29d62",
          "&:hover": {
            borderColor: "inherit",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 28,
          padding: "0 4px",
        },
        colorInfo: {
          backgroundColor: "#333333",
          color: "#f5f5f5",
        },
      },
    },
  },
});

export default theme;
