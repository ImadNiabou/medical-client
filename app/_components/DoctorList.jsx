import React, { useState } from "react";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { Button } from "@/components/ui/button";

const DoctorList = ({ doctorList, heading = "Populare Doctors" }) => {
  const [counterDoctors, setCounterDoctors] = useState(8);
  const dataFilterDoctors = doctorList.slice(0, counterDoctors);
  const seeMoreDoctors = () => {
    setCounterDoctors(counterDoctors + 4);
  };
  return (
    <div className="text-center mb-10 animationA ">
      <h1 className="font-bold p-[8px] mb-[32px] text-slate-600 text-[24px] bg-gradient-to-tr from-slate-800 via-slate-400 to-slate-600 inline-block text-transparent bg-clip-text">
        {heading}
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {dataFilterDoctors && dataFilterDoctors.length > 0
          ? dataFilterDoctors.map((doctor) => (
              <div key={doctor.id} className="mt-10 gap-4">
                <DoctorCard doctor={doctor} />
              </div>
            ))
          : // skelton effect
            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-[320px] bg-slate-200 w-full rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
      <div className="text-center my-7">
        {counterDoctors < doctorList.length && (
          <div className="animationA flex justify-center ">
            <Button
              variant="outline"
              className="p-6 flex gap-2 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
              onClick={seeMoreDoctors}
            >
              See more doctors
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
