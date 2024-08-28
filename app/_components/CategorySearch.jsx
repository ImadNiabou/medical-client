"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";
import Category from "./Category";

function CategorySearch() {
  const [categoryList, setCategorylist] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategorylist(resp.data.data);
    });
  };
  return (
    <div className="animationA mb-4 mt-10 items-center flex flex-col gap-4 ">
      <h2 className="font-bold text-4xl tracking-wide bg-gradient-to-r from-primary to-secondary  inline-block text-transparent bg-clip-text">
        Search Doctors
      </h2>
      <h3 className="text-lg text-gray-500 my-3">
        Search Your Doctor and Book Appointment in one click
      </h3>
      <div className="flex w-full max-w-sm items-center space-x-2 bg-slate-100 shadow-md p-2 rounded-xl my-3">
        <input
          type="submmit"
          placeholder="Search..."
          className="rounded-lg p-[11px] w-full outline-none"
        />
        <Button
          type="submit"
          className="rounded-xl w-[45px] h-[45px] text-white bg-gradient-to-tr from-primary to-secondary hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
        >
          <Search />
        </Button>
      </div>
      {/* display list category */}

      <Category categoryList={categoryList} />
    </div>
  );
}

export default CategorySearch;
