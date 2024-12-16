import { AlignLeft, Sparkle } from "lucide-react";
import React from "react";
import MenuBar from "./components/menu-bar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-between py-4 bg-background w-full px-3">
        <AlignLeft className="cursor-pointer w-6 text-primary" />

        <Sparkle className="cursor-pointer w-6 text-primary" />
      </div>
      <MenuBar />
      {children}
    </>
  );
};

export default RootLayout;
