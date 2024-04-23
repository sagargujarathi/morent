"use client";

import { CacheProvider, ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import createCache from "@emotion/cache";
import theme from "../theme";

const ThemeRegistry = ({ children }: { children: ReactNode }) => {
  const cache = createCache({ key: "css", prepend: true });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeRegistry;
