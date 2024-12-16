"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SevicesArea from "../../services/services-area";

export function ServiceDrawer({
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
          Selecionar Servico
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full h-[100vh]">
        <DrawerTitle></DrawerTitle>
        <SevicesArea modeDrawer setCloseDrawer={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}
