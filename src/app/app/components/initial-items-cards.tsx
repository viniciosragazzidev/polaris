"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BriefcaseIcon, NotepadText, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";

interface InitialCardsNavProps {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

const InitialCardsNav: React.FC<InitialCardsNavProps> = ({
  title,
  href,
  icon,
  description,
}) => (
  <Link href={href}>
    <Card className="  border-none ">
      <CardHeader className="flex flex-col  justify-between space-y-0 gap-3">
        <span className="p-2 rounded-xl bg-primary/10 w-min block">
          {" "}
          {icon}
        </span>
        <CardTitle className=" font-medium text-sm">{title}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>{" "}
  </Link>
);

export default function InitialItemsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-16">
      <InitialCardsNav
        title="Orçamentos"
        href=""
        icon={<NotepadText className="h-5 w-5 text-primary" />}
        description="Suas ordens de serviços"
      />
      <InitialCardsNav
        title="Ordens de serviços"
        href=""
        icon={<BriefcaseIcon className="h-5 w-5 text-primary" />}
        description="Suas OS's"
      />
      <InitialCardsNav
        title="Meus Produtos"
        href=""
        icon={<Wrench className="h-5 w-5 text-primary" />}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <InitialCardsNav
        title="Minhas Vendas"
        href=""
        icon={<ShoppingBag className="h-5 w-5 text-primary" />}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
    </div>
  );
}
