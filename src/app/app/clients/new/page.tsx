"use client";
import { ArrowLeft } from "lucide-react";
import FormNewClient from "./form-new-client";

const NewClient = () => {
  return (
    <>
      <div className="flex justify-between py-4 bg-background w-full px-3 items-center">
        <span
          onClick={() => window.history.back()}
          className="bg-primary/10 p-1 px-2 rounded-md"
        >
          <ArrowLeft className="cursor-pointer w-5 text-primary " />
        </span>

        <span className="text-primary text-sm">Novo Cliente</span>
        <span></span>
      </div>

      <div className="">
        <FormNewClient />
      </div>
    </>
  );
};

export default NewClient;
