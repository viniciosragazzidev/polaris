"use client";
import {
  Box,
  BriefcaseBusiness,
  Plus,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const MenuBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex w-full min-h-12 py-1 justify-center border-t px-4 fixed bottom-0  z-[99] backdrop-blur-2xl bg-opacity-50">
      <ul className="flex w-full justify-around items-center max-w-sm">
        <li
          onClick={() => router.push("/app")}
          className={`cursor-pointer hover:scale-95 transition-all hover:opacity-85 ${
            pathname === "/app" && "text-primary"
          }`}
        >
          <BriefcaseBusiness className="w-6" />
        </li>
        <li
          onClick={() => router.push("/app/os")}
          className={`cursor-pointer hover:scale-95 transition-all hover:opacity-85 ${
            pathname === "/app/os" && "text-primary"
          }`}
        >
          <Box className="w-6" />
        </li>
        <li
          onClick={() => router.push("/app/invoice")}
          className="cursor-pointer hover:scale-95 transition-all hover:opacity-85 w-10 flex justify-center  items-center h-10 rounded-full border border-primary "
        >
          <Plus className="w-5 text-primary  " />
        </li>
        <li
          className={`cursor-pointer hover:scale-95 transition-all hover:opacity-85 ${
            pathname === "/app/finance" && "text-primary"
          }`}
        >
          <Wallet className="w-6" />
        </li>
        <li
          className={`cursor-pointer hover:scale-95 transition-all hover:opacity-85 ${
            pathname === "/app/sales" && "text-primary"
          }`}
        >
          <ShoppingBag className="w-6" />
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
