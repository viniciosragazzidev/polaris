"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  lastName: z
    .string()
    .min(2, { message: "O sobrenome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  gender: z.enum(["masculino", "feminino", "outro"], {
    required_error: "Por favor, selecione um gênero",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function UserForm() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: undefined,
    },
  });

  const router = useRouter();
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui você pode enviar os dados para o servidor
    router.push("/onboard/org");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between pt-2 pb-4">
        <ChevronLeft
          onClick={() => window.history.back()}
          className="cursor-pointer w-5"
        />
        <span className="">Perfil do Usuário</span>
        <LogOut className="cursor-pointer w-5" />
      </div>
      <Card className="w-full max-w-md mx-auto  text-slate-100 border-none pt-4">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-sm">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome</Label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder: "
                    id="firstName"
                    placeholder="Digite seu nome"
                    {...field}
                  />
                )}
              />
              {errors.firstName && (
                <p className=" text-red-500 text-nowrap">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Sobrenome</Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder: "
                    id="lastName"
                    placeholder="Digite seu sobrenome"
                    {...field}
                  />
                )}
              />
              {errors.lastName && (
                <p className=" text-red-500 text-nowrap">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    className="placeholder: "
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <p className=" text-red-500 text-nowrap">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Gênero</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="masculino" id="masculino" />
                      <Label htmlFor="masculino">Masculino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feminino" id="feminino" />
                      <Label htmlFor="feminino">Feminino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outro" id="outro" />
                      <Label htmlFor="outro">Outro</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.gender && (
                <p className=" text-red-500 text-nowrap">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="profileImage">Imagem de Perfil</Label>
              <Input
                className="placeholder: "
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {profileImage && (
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profileImage} alt="Imagem de perfil" />
                  <AvatarFallback>Perfil</AvatarFallback>
                </Avatar>
              )}
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
