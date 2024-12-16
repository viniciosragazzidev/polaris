"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import onboard from "../../../public/onboard.png";
const Onboard = () => {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col items-center justify-center  bg-slate-100">
      <div className="flex justify-between py-4 bg-background w-full px-3 items-center">
        <ChevronLeft className="cursor-pointer w-5" />
        <span className="">Onboard</span>
        <LogOut className="cursor-pointer w-5" />
      </div>
      <div className="container relative  w-full h-full   rounded-lg  p-2">
        <div className="w-full flex justify-center h-full mt-10 relative max-h-[300px] ">
          <Image src={onboard} className="w-[300px]" alt="onboard" />
        </div>
        <div className="mt-6 flex flex-col gap-4 justify-center w-full items-center ">
          <Button
            onClick={() => router.push("/onboard/user")}
            className="w-full max-w-sm rounded-full text-secondary"
          >
            Criar novo perfil
          </Button>
          <Button variant="outline" className="w-full max-w-sm rounded-full">
            Entrar em um perfil
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Onboard;
