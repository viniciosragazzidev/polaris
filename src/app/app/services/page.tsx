"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Bell, Search } from "lucide-react";

export default function Services() {
  return (
    <>
      <div className="flex justify-between py-4 bg-background w-full px-3">
        <span
          onClick={() => window.history.back()}
          className="bg-primary/10 p-1 px-2 rounded-md"
        >
          <ArrowLeft className="cursor-pointer w-5 text-primary " />
        </span>

        <Bell className="cursor-pointer w-5 text-primary" />
      </div>
      <main className="container mx-auto p-4">
        <header>
          <h1 className="text-lg font-semibold">Meus Serviços</h1>
        </header>
        <div className="pt-5 pb-4 flex flex-col gap-4 border-b border-secondary">
          <div className="text-sm relative flex items-center ">
            <Input
              placeholder="Busque um cliente"
              className="w-full placeholder:text-sm py-5 bg-secondary/50 border-none"
            />
            <Search className="absolute right-3 text-primary  w-5" />
          </div>

          <Button variant="outline" className="text-sm py-5">
            Adicionar novo Serviço
          </Button>
        </div>
      </main>
    </>
  );
}
