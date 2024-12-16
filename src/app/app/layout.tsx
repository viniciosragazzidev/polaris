import React from "react";
import MenuBar from "./components/menu-bar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MenuBar />
      {children}
    </>
  );
};

export default RootLayout;
