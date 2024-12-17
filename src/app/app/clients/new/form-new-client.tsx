"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { addNewClient } from "@/lib/actions/client";
import { ClientType } from "@/lib/types/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
const formSchema = z.object({
  nome: z.string().min(1, { message: "O cliente é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(1, { message: "O telefone é obrigatório" }),
  documento: z.string().min(1, { message: "O documento é obrigatório" }),
  type: z
    .string()
    .min(1, { message: "O type é obrigatório" })
    .default("fisica"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormNewClient() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      documento: "",
      type: "fisica",
    },
  });

  // const router = useRouter();
  const onSubmit = async (data: FormData) => {
    const client: ClientType = {
      id: Math.random().toString(36).substring(2, 9),
      accountId: "1",
      name: data.nome,
      email: data.email,
      phone: data.telefone,
      document: data.documento,
      type: typeClient,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // Aqui você pode enviar os dados para o servidor

    const res = await mutation.mutateAsync(client);

    if (res?.success) {
      window.history.back();
    }
  };
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ClientType) => {
      const res = await addNewClient(data);
      return res;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const [typeClient, setTypeClient] = useState<"fisica" | "juridica">("fisica");
  return (
    <>
      <ScrollArea className="w-sm h-[calc(100vh-100px)] whitespace-nowrap ">
        <div className="w-full container px-4 py-4 pb-32">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-sm">
            <div className="space-y-2">
              <Label htmlFor="cliente">Nome</Label>
              <Controller
                name="nome"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-5">
                    <Input
                      className="placeholder:text-sm text-sm "
                      id="cliente"
                      placeholder="Nome do Cliente"
                      {...field}
                    />
                  </div>
                )}
              />
              {errors.nome && (
                <p className="text-red-500 text-nowrap">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-5">
                    <Input
                      className="placeholder:text-sm text-sm "
                      id="email"
                      placeholder="Email"
                      {...field}
                    />
                  </div>
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-nowrap">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Controller
                name="telefone"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-5">
                    <Input
                      className="placeholder:text-sm text-sm "
                      id="telefone"
                      placeholder="Telefone"
                      {...field}
                    />
                  </div>
                )}
              />
              {errors.telefone && (
                <p className="text-red-500 text-nowrap">
                  {errors.telefone.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-s">Selecione uma opção</Label>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={typeClient === "fisica" ? "outline" : "ghost"}
                >
                  <Input
                    className="placeholder:text-sm text-sm w-4 "
                    type="radio"
                    id="fisica"
                    value="fisica"
                    checked={typeClient === "fisica"}
                    onChange={() => setTypeClient("fisica")}
                  />
                  <Label htmlFor="fisica">Fisica</Label>
                </Button>

                <Button
                  type="button"
                  variant={typeClient === "juridica" ? "outline" : "ghost"}
                >
                  <Input
                    className="placeholder:text-sm text-sm w-4 "
                    type="radio"
                    id="juridica"
                    value="juridica"
                    checked={typeClient === "juridica"}
                    onChange={() => setTypeClient("juridica")}
                  />
                  <Label htmlFor="juridica">Juridica</Label>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="documento">
                {typeClient === "fisica" ? "CPF" : "CNPJ"}
              </Label>
              <Controller
                name="documento"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-5">
                    <Input
                      className="placeholder:text-sm text-sm "
                      id="documento"
                      placeholder={typeClient === "fisica" ? "CPF" : "CNPJ"}
                      {...field}
                    />
                  </div>
                )}
              />
              {errors.documento && (
                <p className="text-red-500 text-nowrap">
                  {errors.documento.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </div>
      </ScrollArea>
    </>
  );
}
