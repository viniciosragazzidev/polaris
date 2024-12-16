"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Bell, Search, TriangleAlert } from "lucide-react";

const Orcamentos = () => {
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
          <h1 className="text-lg font-semibold">Orçamentos</h1>
        </header>
        <div className="pt-5 pb-4 flex flex-col gap-4 border-b border-secondary">
          <div className="text-sm relative flex items-center ">
            <Input
              placeholder="Procure pelo nome, ou documento do cliente"
              className="w-full placeholder:text-sm py-5 bg-secondary/50 border-none"
            />
            <Search className="absolute right-3 text-primary  w-5" />
          </div>
          <Button variant="outline" className="text-sm py-5">
            Adicionar novo Serviço
          </Button>
          <Tabs defaultValue="pending" className="w-full max-w-md">
            <TabsList className="flex justify-around w-full ">
              <TabsTrigger
                className="text-sm active:text-primary"
                value="pending"
              >
                Pendentes
              </TabsTrigger>
              <TabsTrigger
                className="text-sm active:text-primary"
                value="approved"
              >
                Aprovados
              </TabsTrigger>
              <TabsTrigger
                className="text-sm active:text-primary"
                value="archived"
              >
                Arquivados
              </TabsTrigger>
              <TabsTrigger
                className="text-sm active:text-primary"
                value="models"
              >
                Modelos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pending">
              <div className="flex w-full min-h-36">
                <div className="w-full h-36 flex justify-center items-center">
                  <span className="text-sm flex items-center gap-2">
                    <span>
                      <TriangleAlert className="w-5 h-5 text-primary" />
                    </span>{" "}
                    <span>Nenhum orçamento pendente encontrado</span>
                  </span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="approved">
              <div className="flex w-full min-h-36">
                <div className="w-full h-36 flex justify-center items-center">
                  <span className="text-sm flex items-center gap-2">
                    <span>
                      <TriangleAlert className="w-5 h-5 text-primary" />
                    </span>{" "}
                    <span>Nenhum orçamento aprovado encontrado</span>
                  </span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="archived">
              <div className="flex w-full min-h-36">
                <div className="w-full h-36 flex justify-center items-center">
                  <span className="text-sm flex items-center gap-2">
                    <span>
                      <TriangleAlert className="w-5 h-5 text-primary" />
                    </span>{" "}
                    <span>Nenhum orçamento arquivado encontrado</span>
                  </span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="models">
              <div className="flex w-full min-h-36">
                <div className="w-full h-36 flex justify-center items-center">
                  <span className="text-sm flex items-center gap-2">
                    <span>
                      <TriangleAlert className="w-5 h-5 text-primary" />
                    </span>{" "}
                    <span>Nenhum orçamento modelo encontrado</span>
                  </span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default Orcamentos;
