"use client";
import ContactForm from "../contact/_components/ContactForm";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
const contact = () => {
  const router = useRouter();

  return (
    <div className="text-center my-[20px]">
      <Button
        variant="outline"
        className="cursor-pointer text-slate-500 flex justify-center p-6 flex gap-1 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
        onClick={() => router.back()}
      >
        <RiArrowLeftDoubleLine className="text-2xl animate-pulse" />
        Back
      </Button>
      <h1 className="font-bold p-[8px] mb-[32px] text-slate-600 text-[24px] bg-gradient-to-tr from-slate-800 via-slate-400 to-slate-600 inline-block text-transparent bg-clip-text">
        Contact Us
      </h1>
      <h2 className="font-semibold text-slate-400 text-lg">
        Any question or remarks? just write us a message!
      </h2>
      <ContactForm />
    </div>
  );
};

export default contact;
