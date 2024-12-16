"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ClientsArea from "../../clients/clients-area";

export function ClientDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="hidden" variant="outline">
          Selecionar Cliente
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full h-[100vh]">
        <DrawerTitle></DrawerTitle>

        <ClientsArea modeDrawer setCloseDrawer={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}
