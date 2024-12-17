"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import ClientsArea from "../../clients/clients-area";
import SevicesArea from "../../services/services-area";

interface GlobalDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSelectedData?: (data: unknown) => void;
  mode?: "client" | "service" | "newClient" | "newService";
}
export function GlobalDrawer({
  open,
  setOpen,
  setSelectedData,
  mode,
}: GlobalDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="hidden" variant="outline">
          Selecionar
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full h-[90vh]">
        <DrawerTitle></DrawerTitle>

        <ScrollArea className="w-full h-full ">
          {" "}
          <div className="pb-10">
            {mode === "client" ? (
              <ClientsArea
                modeDrawer={true}
                setCloseDrawer={setOpen}
                setSelectedClient={setSelectedData}
              />
            ) : (
              <SevicesArea modeDrawer setCloseDrawer={setOpen} />
            )}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
