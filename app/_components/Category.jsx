import React from "react";
import Link from "next/link";
import Image from "next/image";
const Category = ({ categoryList }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 lg:grid-cols-6">
      {categoryList.length > 0
        ? categoryList.map(
            (item, index) =>
              index < 6 && (
                <Link
                  href={"/search/" + item.attributes.Name}
                  key={item.id}
                  className="mt-5 flex flex-col text-center items-center gap-7
          p-4 m-3 rounded-2xl bg-gradient-to-tr from-primary/5 to-secondary/20 hover:hover:bg-gradient-to-br hover:shadow-lg transition-all ease-in-out
          hover:scale-105 cursor-pointer w-full"
                >
                  <Image
                    src={item.attributes?.Icon?.data.attributes.url}
                    alt="icon"
                    width={50}
                    height={50}
                  />
                  <label className="text-[15px] text-gray-700s">
                    <span> {item.attributes?.Name}</span>
                  </label>
                </Link>
              )
          )
        : // Skeleton effect
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="h-[130px] bg-slate-200 w-[140px] animate-pulse rounded-lg "></div>
          ))}
    </div>
  );
};

export default Category;
