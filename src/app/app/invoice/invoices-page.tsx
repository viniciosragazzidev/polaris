"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, MoreHorizontal, Plus, Trash2 } from "lucide-react";

// Tipo para representar uma invoice
type Invoice = {
  id: string;
  client: string;
  equipment: string[];
  date: string;
  status: "Pending" | "Completed" | "Cancelled";
  value: number;
  technician: string;
};

// Dados de exemplo para as invoices
const invoices: Invoice[] = [
  {
    id: "INV001",
    client: "Empresa ABC",
    equipment: ["Laptop Dell", "Monitor LG"],
    date: "2023-05-15",
    status: "Pending",
    value: 1500.0,
    technician: "João Silva",
  },
  {
    id: "INV002",
    client: "Loja XYZ",
    equipment: ["Impressora HP"],
    date: "2023-05-16",
    status: "Completed",
    value: 500.0,
    technician: "Maria Santos",
  },
  {
    id: "INV003",
    client: "Escritório 123",
    equipment: ["Desktop Lenovo", "Roteador TP-Link", "Switch Cisco"],
    date: "2023-05-17",
    status: "Cancelled",
    value: 2000.0,
    technician: "Pedro Oliveira",
  },
];

export default function InvoicesPage() {
  return (
    <div className="">
      <div className="flex justify-between py-5">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Invoice
        </Button>
      </div>
      <Card className="w-full px-0">
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="w-[100px] pl-4">ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Equipamento</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>Técnico</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="p-0">
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="py-0">
                  <TableCell className="font-medium pl-4">
                    {invoice.id}
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {invoice.client}
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {invoice.equipment[0]}
                    {invoice.equipment.length > 1 && (
                      <Badge variant="secondary" className="ml-2">
                        +{invoice.equipment.length - 1}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-nowrap">{invoice.date}</TableCell>
                  <TableCell className="text-nowrap">
                    <Badge
                      variant={
                        invoice.status === "Completed"
                          ? "default"
                          : invoice.status === "Cancelled"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {invoice.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {invoice.technician}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
