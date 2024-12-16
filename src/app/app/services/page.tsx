"use client";
import { ArrowLeft, Bell } from "lucide-react";
import ServicesArea from "./services-area";
export default function Services() {
  return (
    <>
      <div className="flex justify-between py-4 bg-background w-full px-3 items-center">
        <span
          onClick={() => window.history.back()}
          className="bg-primary/10 p-1 px-2 rounded-md"
        >
          <ArrowLeft className="cursor-pointer w-5 text-primary " />
        </span>

        <Bell className="cursor-pointer w-5 text-primary" />
      </div>
      <ServicesArea />
    </>
  );
}
