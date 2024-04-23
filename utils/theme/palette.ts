// ----------------------------------------------------------------------

import { alpha } from "./typography";

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#D6E4FD",
  light: "#AEC8FC",
  main: "#3563E9",
  dark: "#264BC8",
  darker: "#0A196F",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#E0E9F4",
  light: "#596780",
  main: "#1A202C",
  dark: "#131825",
  darker: "#040815",
  contrastText: "#FFFFFF",
};

const INFO = {
  lighter: "#DCF3FF",
  light: "#7EC2FF",
  main: "#54A6FF",
  dark: "#3D81DB",
  darker: "#102E7A",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#F5FCD2",
  light: "#BCE455",
  main: "#9CD323",
  dark: "#7FB519",
  darker: "#3B6506",
  contrastText: "#ffffff",
};

const WARNING = {
  lighter: "#FFF8D7",
  light: "#FFD96B",
  main: "#FFC73A",
  dark: "#DBA32A",
  darker: "#7A4D0B",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D3",
  light: "#FF7F59",
  main: "#FF4423",
  dark: "#DB2719",
  darker: "#7A0619",
  contrastText: "#FFFFFF",
};

export const theme = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode: "light" | "dark") {
  return {
    ...theme,
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      neutral: GREY[200],
    },
    action: {
      ...theme.action,
      active: GREY[600],
    },
  };
}
