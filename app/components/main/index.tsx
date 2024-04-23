"use client";

import { Container } from "@mui/material";
import { ReactNode } from "react";
import { useStore } from "../store-provider";
import { DRAWER_WIDTH } from "../drawer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Main = ({ children }: { children: ReactNode }) => {
  const { state } = useStore();

  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 160 / 8,
        px: { lg: "64px !important" },
        minHeight: "100vh",
        transitionDuration: "225ms",
        transitionProperty: "margin",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        ...(state.openDrawer && {
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          marginLeft: `${DRAWER_WIDTH}px`,
        }),
      }}
      component="main"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </Container>
  );
};

export default Main;
