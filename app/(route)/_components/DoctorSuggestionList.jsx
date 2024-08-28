import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DoctorSuggestionList = () => {
  const [counterDoctors, setCounterDoctors] = useState(4);

  const seeMoreDoctors = () => {
    setCounterDoctors(counterDoctors + 1);
  };
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  };
  const dataFilterDoctors = doctorList.slice(0, counterDoctors);

  return (
    <>
      <aside className="flex-col flex">
        <h2 className=" font-bold p-[8px] text-[22px] mb-2">Suggestions</h2>
        {
          dataFilterDoctors.map((doctor) => (
            <div key={doctor.id}>
              <div
                className="w-[280px] p-3 rounded-xl transition-all ease-in-out
              hover:scale-105 cursor-pointer flex items-center gap-3"
              >
                <Link href={"/details/" + doctor?.id}>
                  <div className="flex gap-3 items-center shadow-md p-2 w-[260px] rounded-[10px] hover:bg-gradient-to-tr from-slate-50 to-slate-200 hover:shadow-lg">
                    <img
                      src={doctor.attributes?.Image?.data?.attributes?.url}
                      alt="doctor"
                      width={70}
                      height={70}
                      className="object-cover rounded-full w-[70px] h-[70px]"
                    />
                    <div className="mt-3 items-baseline ">
                      <h2
                        className="bg-gradient-to-tr from-primary/5 to-secondary/20 rounded-xl mt-2 px-4 py-2 font-semibold
                      text-secondary"
                      >
                        {doctor.attributes?.Categories}
                      </h2>
                      <h2 className="m-2 font-bold text-gray-700">
                        {" "}
                        {doctor.attributes?.Name}
                      </h2>
                      <h2 className="text-slate-500 m-2">
                        {doctor.attributes?.Year_of_experience}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )) // skelton effect
        }

        <div className="text-center ">
          {counterDoctors < doctorList.length && (
            <div>
              <Button
                variant="outline"
                className="p-6 flex gap-2 font-semibold w-full mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
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
      </aside>
    </>
  );
};

export default DoctorSuggestionList;
