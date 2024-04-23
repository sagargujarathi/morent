import type { Metadata } from "next";
import { ReactNode } from "react";
import ThemeRegistry from "@/utils/theme-provider";
import { CssBaseline } from "@mui/material";
import Header from "./sections/nav-bar";
import Footer from "./sections/footer";
import "./globals.css";
import StoreProvider from "./components/store-provider";
import Aside from "./components/drawer";
import Main from "./components/main";

export const metadata: Metadata = {
  title: "Morent",
  description: "Leading car rental services",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeRegistry>
      <CssBaseline />
      <html lang="en">
        <body>
          <StoreProvider>
            <Header />
            <Aside />
            <Main>{children}</Main>
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </ThemeRegistry>
  );
};

export default RootLayout;
