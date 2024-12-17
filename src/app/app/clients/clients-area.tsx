"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getClientsByAccountId } from "@/lib/actions/client";
import { ClientType } from "@/lib/types/app";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Loader, Search } from "lucide-react";
import Link from "next/link";
interface ClientsAreaProps {
  modeDrawer?: boolean;
  setCloseDrawer?: (value: boolean) => void;
  setSelectedClient?: (data: unknown) => void;
}
const ClientsArea = ({
  modeDrawer,
  setCloseDrawer,
  setSelectedClient,
}: ClientsAreaProps) => {
  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClientsByAccountId("1"),
  });

  const groupedClients = clients?.reduce(
    (acc: Record<string, ClientType[]>, client: ClientType) => {
      const firstLetter = client.name[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(client);
      return acc;
    },
    {}
  );

  const actionOnClick = (client: ClientType) => {
    if (modeDrawer && client && setSelectedClient && setCloseDrawer) {
      setSelectedClient(client);
      setCloseDrawer(false);
    }
  };
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
        <h1 className="text-lg font-semibold">Meus Clientes</h1>
        <span></span>
      </header>
      <div className="pt-5 pb-4 flex flex-col gap-4 border-b border-secondary">
        <div className="text-sm relative flex items-center ">
          <Input
            placeholder="Busque um cliente"
            className="w-full placeholder:text-sm py-5 bg-secondary/50 border-none"
          />
          <Search className="absolute right-3 text-primary  w-5" />
        </div>
        <Link href="/app/clients/new" className="w-full">
          <Button variant="outline" className="text-sm py-5 w-full">
            Adicionar novo cliente
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <span className="animate-spin">
            <Loader className="w-10 h-10 text-primary" />
          </span>
        </div>
      ) : (
        <div className="list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
          {Object.keys(groupedClients)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-6 flex flex-col gap-1">
                <h2 className=" font-bold border-b pb-1 text-sm">{letter}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
                  {groupedClients[letter].map((client: ClientType) => (
                    <div
                      onClick={() => actionOnClick(client)}
                      className="flex items-center py-2 cursor-pointer hover:bg-secondary/10 gap-2 rounded-md px-2"
                      key={client.id}
                    >
                      <Avatar>
                        <AvatarImage src="" alt={client.name} />
                        <AvatarFallback className="text-sm text-primary">
                          {client.name.charAt(0) +
                            client.name.charAt(1).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{client.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </main>
  );
};

export default ClientsArea;
