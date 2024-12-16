"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { AlignLeft, Bell, Sparkle, UserPlus } from "lucide-react";
import Image from "next/image";
import banner from "../../../public/banner.png";
import InitialCards from "./components/initial-cards";
import InitialItemsCards from "./components/initial-items-cards";
const App = () => {
  return (
    <>
      <div className="flex justify-between py-4 bg-background w-full px-3 items-center">
        <AlignLeft className="cursor-pointer w-6 text-primary" />

        <Sparkle className="cursor-pointer w-6 text-primary" />
      </div>
      <main className="w-full h-full mx-auto p-4 bg-[#071623]">
        <div className=" container flex flex-col gap-5 md:justify-center md:items-center">
          <header className="flex w-full justify-between pb-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground/80">
                  Logado como
                </span>
                <p className="text-sm font-semibold text-primary">
                  Vinicios Ragazzi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <UserPlus className=" w-6 text-primary" />
              <Bell className=" w-6 text-primary" />
            </div>
          </header>
          <InitialCards />

          <div className="w-full max-w-lg">
            <AspectRatio ratio={15 / 8}>
              <Image
                src={banner}
                alt="Image"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>

          <InitialItemsCards />
        </div>
      </main>
    </>
  );
};

export default App;
