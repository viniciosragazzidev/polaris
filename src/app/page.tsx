import { LogIn, Sparkle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-2 bg-slate-100">
      <div className="container relative  bg-background w-full h-full rounded-lg flex flex-col justify-center items-center">
        <div className="logo flex flex-col gap-2 mb-10 justify-center items-center">
          <Sparkle className="h-10 w-10 text-primary" />
          <h1 className="text-4xl text-white font-black tracking-widest uppercase">
            Polaris
          </h1>
        </div>

        <Link
          href={"/onboard"}
          className="text-primary bg-secondary/50  absolute top-[70%] cursor-pointer hover:bg-secondary hover:text-primary p-3 backdrop-blur-2xl  transition-all rounded-full"
        >
          <LogIn />
        </Link>

        <p className="text-zinc-300 absolute bottom-0 text-center pb-10 max-w-md px-10 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit excepturi,
          quas.
        </p>
      </div>
    </main>
  );
}
