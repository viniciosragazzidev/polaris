"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, LogOut, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
});

type FormData = z.infer<typeof formSchema>;

type Member = {
  id: number;
  email: string;
};

export default function OrgForm() {
  const [members, setMembers] = useState<Member[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const [newMemberEmail, setNewMemberEmail] = useState("");

  const router = useRouter();
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui você pode enviar os dados para o servidor
    router.push("/app");
  };

  const addMember = () => {
    if (newMemberEmail) {
      setMembers([...members, { id: Date.now(), email: newMemberEmail }]);
      setNewMemberEmail("");
    }
  };

  const removeMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div className="">
      <div className="flex justify-between pt-2 pb-4">
        <ChevronLeft
          onClick={() => window.history.back()}
          className="cursor-pointer w-5"
        />
        <span className="">Perfil da Organização</span>
        <LogOut className="cursor-pointer w-5" />
      </div>
      <Card className="w-full max-w-md mx-auto  text-slate-100 border-none pt-4">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-sm">
            <div className="space-y-2">
              <Label htmlFor="name">Nome da Organização</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder: "
                    id="name"
                    placeholder="Nome da organização"
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <p className=" text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email da Organização</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder: "
                    id="email"
                    type="email"
                    placeholder="Email da organização"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <p className=" text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="newMember">Adicionar Membro</Label>
              <div className="flex space-x-2">
                <Input
                  value={newMemberEmail}
                  type="email"
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  className="placeholder: "
                  id="newMember"
                  placeholder="Email do novo membro"
                />

                <Button type="button" onClick={addMember}>
                  Adicionar
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Membros da Organização</Label>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead className="w-[100px]">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMember(member.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
