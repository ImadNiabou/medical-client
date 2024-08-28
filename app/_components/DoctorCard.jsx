import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DoctorCard = ({ doctor }) => {
  return (
    <div>
      <div
        className="fadeInUp text-start shadow-md w-[260px] p-3 rounded-xl hover:bg-gradient-to-tr from-slate-50 to-slate-200 hover:shadow-xl transition-all duration-300 ease-in-out
        hover:scale-105 cursor-pointer h-[460px]"
      >
        <img
          src={doctor.attributes?.Image?.data?.attributes?.url}
          alt="doctor"
          width={300}
          height={500}
          className="object-cover rounded-[8px] h-[170px]"
        />
        <div>
          <div className="mt-3 items-baseline flex flex-col">
            <h2
              className="bg-gradient-to-tr from-primary/5 to-secondary/20 rounded-xl mt-2 px-4 py-2 font-semibold
                   text-secondary"
            >
              {doctor.attributes?.Categories}
            </h2>
          </div>
          <h2 className="mt-3 m-2 font-bold text-gray-700">
            {" "}
            {doctor.attributes?.Name}
          </h2>
          <h2 className="text-primary m-2">
            {doctor.attributes?.Year_of_experience}
          </h2>
          <h2 className="text-gray-500 m-2 h-[46px]">
            {doctor.attributes?.Adress}
          </h2>
          <Link href={"/details/" + doctor?.id}>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer w-full text-slate-500 flex justify-center mb-5 p-6 flex gap-1 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg hover:bg-primary"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
