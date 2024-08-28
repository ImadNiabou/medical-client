"use client";
import { React, useState, useEffect } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import Link from "next/link";
import Image from "next/image";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const [categoryList, setCategorylist] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];
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
    <>
      <aside className="h-screen flex flex-col cursor-pointer mb-[100px] mt-8">
        <Command className="fixed relative shadow-lg min-w-[300px] rounded-xl p-4">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className="overflow-visible ">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {categoryList &&
                categoryList.map((item, index) => (
                  <div
                    key={index}
                    className="hover:shadow-lg transition-all rounded-[10px] cursor-pointer duration-300 ease-in-out"
                  >
                    <CommandItem>
                      <Link
                        href={"/search/" + item?.attributes?.Name}
                        className={`p-2 flex gap-3 items-center  text-[15px] text-bold
                        ${
                          category == item.attributes.Name &&
                          "bg-gradient-to-tr from-primary/5 to-secondary/20 w-full rounded-[10px]"
                        }`}
                      >
                        <Image
                          src={item.attributes?.Icon?.data.attributes.url}
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <label>{item.attributes.Name}</label>
                      </Link>
                    </CommandItem>
                  </div>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </aside>
    </>
  );
};

export default CategoryList;
