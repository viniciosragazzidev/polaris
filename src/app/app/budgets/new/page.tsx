"use client";
import { ArrowLeft } from "lucide-react";
import FormNewBudget from "./form-new-budget";

const NewBudget = () => {
  return (
    <>
      <div className="flex justify-between py-4 bg-background w-full px-3 items-center">
        <span
          onClick={() => window.history.back()}
          className="bg-primary/10 p-1 px-2 rounded-md"
        >
          <ArrowLeft className="cursor-pointer w-5 text-primary " />
        </span>

        <span className="text-primary text-sm">Novo Orçamento</span>
        <span></span>
      </div>

      <div className="">
        <FormNewBudget />
      </div>
    </>
  );
};

export default NewBudget;
