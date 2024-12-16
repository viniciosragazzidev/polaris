import { ThemeProvider } from "next-themes";
import React from "react";

const IndexProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {/* <ModeToggle /> */}
        {children}
      </ThemeProvider>
    </>
  );
};

export default IndexProvider;
