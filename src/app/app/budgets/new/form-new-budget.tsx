"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { ClientDrawer } from "../../components/drawers/client";
import { ServiceDrawer } from "../../components/drawers/services";

const formSchema = z.object({
  cliente: z.string().min(1, { message: "O cliente é obrigatório" }),
  endereco: z.string().optional(),
  //   servico: z.array(z.object({})).min(1, { message: "O serviço é obrigatório" }),
  //   itemsAdicionais: z.array(z.object({})).optional(),
  //   materiais: z.array(z.object({})).optional(),
  total: z.string().min(1, { message: "O total é obrigatório" }),
  //   condicaoPagamento: z.array(z.object({})).min(1, { message: "A condição de pagamento é obrigatória" }),
  validadeOrcamento: z
    .string()
    .min(1, { message: "A validade do orçamento é obrigatória" }),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function FormNewBudget() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cliente: "",
      endereco: "",
      //   servico: [],
      //   itemsAdicionais: [],
      //   materiais: [],
      total: "",
      //   condicaoPagamento: [],
      validadeOrcamento: "",
      observacoes: "",
    },
  });

  const router = useRouter();
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui você pode enviar os dados para o servidor
    router.push("/onboard/org");
  };
  const [openDrawerClient, setOpenDrawerClient] = useState(false);
  const [openDrawerService, setOpenDrawerService] = useState(false);
  return (
    <>
      <ClientDrawer open={openDrawerClient} setOpen={setOpenDrawerClient} />
      <ServiceDrawer open={openDrawerService} setOpen={setOpenDrawerService} />
      <ScrollArea className="w-sm h-[calc(100vh-100px)] whitespace-nowrap ">
        <div className="w-full container px-4 py-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-sm">
            <div className="space-y-2">
              <Label htmlFor="cliente">Cliente</Label>

              <Button
                onClick={() => setOpenDrawerClient(true)}
                variant={"zero"}
              >
                Selecione o cliente
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Controller
                name="endereco"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder:text-sm text-sm "
                    id="endereco"
                    placeholder="Digite o endereço (opcional)"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label>Serviço</Label>
              <Button
                onClick={() => setOpenDrawerService(true)}
                variant={"zero"}
              >
                Selecione um ou mais serviços
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Items Adicionais</Label>

              <Input
                className="placeholder:text-sm text-sm "
                placeholder="Detalhe os items adicionais (opcional)"
              />
            </div>

            <div className="space-y-2">
              <Label>Materiais</Label>

              <Input
                className="placeholder:text-sm text-sm "
                placeholder="Detalhe os materiais (opcional)"
              />
            </div>

            <h3 className="text-lg font-bold">Informações de Pagamento</h3>

            <div className="space-y-2">
              <Label htmlFor="total">Total</Label>
              <Controller
                name="total"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder:text-sm text-sm "
                    id="total"
                    placeholder="Digite o valor total"
                    {...field}
                  />
                )}
              />
              {errors.total && (
                <p className="text-red-500 text-nowrap">
                  {errors.total.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Condição de Pagamento</Label>

              <Input
                className="placeholder:text-sm text-sm "
                placeholder="Detalhe a condição de pagamento (obrigatório)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="validadeOrcamento">Validade do Orçamento</Label>
              <Controller
                name="validadeOrcamento"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Input
                      className="placeholder:text-sm text-sm "
                      id="validadeOrcamento"
                      placeholder="Número de dias"
                      {...field}
                    />
                    <span>Dias</span>
                  </div>
                )}
              />
              {errors.validadeOrcamento && (
                <p className="text-red-500 text-nowrap">
                  {errors.validadeOrcamento.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Observações</Label>
              <Controller
                name="observacoes"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder:text-sm text-sm "
                    placeholder="Adicione observações (opcional)"
                    {...field}
                  />
                )}
              />
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
