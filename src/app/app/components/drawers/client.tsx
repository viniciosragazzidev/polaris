"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClientType } from "@/lib/types/app";
import ClientsArea from "../../clients/clients-area";

export function ClientDrawer({
  open,
  setOpen,
  setSelectedClient,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSelectedClient: (client: ClientType) => void;
}) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="hidden" variant="outline">
          Selecionar Cliente
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full h-[90vh]">
        <DrawerTitle></DrawerTitle>

        <ScrollArea className="w-full h-full ">
          {" "}
          <div className="pb-10">
            <ClientsArea
              modeDrawer={true}
              setCloseDrawer={setOpen}
              setSelectedClient={setSelectedClient}
            />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
