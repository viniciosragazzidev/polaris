"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";

interface ServicesAreaProps {
  modeDrawer?: boolean;
  setCloseDrawer?: (value: boolean) => void;
}

const SevicesArea = ({ modeDrawer, setCloseDrawer }: ServicesAreaProps) => {
  return (
    <main className="container mx-auto p-4">
      <header className="flex justify-between">
        {modeDrawer && (
          <span
            onClick={() => setCloseDrawer && setCloseDrawer(false)}
            className="bg-primary/10 p-1 px-2 rounded-md"
          >
            <ArrowLeft className="cursor-pointer w-5 text-primary " />
          </span>
        )}
        <h1 className="text-lg font-semibold">Meus Serviços</h1>
        <span></span>
      </header>
      <div className="pt-5 pb-4 flex flex-col gap-4 border-b border-secondary">
        <div className="text-sm relative flex items-center ">
          <Input
            placeholder="Busque um servico"
            className="w-full placeholder:text-sm py-5 bg-secondary/50 border-none"
          />
          <Search className="absolute right-3 text-primary  w-5" />
        </div>

        <Button variant="outline" className="text-sm py-5">
          Adicionar novo Serviço
        </Button>
      </div>
    </main>
  );
};

export default SevicesArea;
