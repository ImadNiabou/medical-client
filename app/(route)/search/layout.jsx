"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import CategoryList from "./_components/CategoryList";

const layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="hidden lg:block">
          <Button
            variant="outline"
            className="cursor-pointer text-slate-500 flex justify-center  mb-5 p-6 flex gap-1 font-semibold mt-1 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
            onClick={() => router.back()}
          >
            <RiArrowLeftDoubleLine className="text-2xl animate-pulse" />
            Back
          </Button>
          {/* categories */}
          <CategoryList />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default layout;
