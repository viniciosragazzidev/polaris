"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DollarSign, Phone, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";

interface StatCardProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, href, icon }) => (
  <Link href={href}>
    <Card className="  border-none w-36">
      <CardHeader className="flex flex-col w-full  justify-between space-y-0 gap-3">
        <span className="p-2 rounded-xl bg-primary/10 w-min block">
          {" "}
          {icon}
        </span>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
    </Card>{" "}
  </Link>
);

export default function InitialCards() {
  return (
    <ScrollArea className="w-sm h-full whitespace-nowrap ">
      <div className="flex gap-4 pb-4">
        <StatCard
          title="Clientes"
          href="/app/clients"
          icon={<Phone className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Meus Serviços"
          href="/app/services"
          icon={<DollarSign className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Meus Produtos"
          href="/app/products"
          icon={<Wrench className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Minhas Vendas"
          href="/app/sales"
          icon={<ShoppingBag className="h-5 w-5 text-primary" />}
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
