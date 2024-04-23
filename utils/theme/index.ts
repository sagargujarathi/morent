import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({ palette: palette("light"), typography });

export default theme;
