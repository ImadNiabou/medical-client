"use client";
import { useRouter } from "next/navigation";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../../_components/DoctorDetails";
import DoctorSuggestionList from "../../_components/DoctorSuggestionList";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const Details = ({ params }) => {
  const router = useRouter();
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    getDoctorById();
  }, []);
  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then((resp) => {
      setDoctor(resp.data.data);
    });
  };

  return (
    <div className="py-5 md:px-2 text-slate-600">
      <Button
        variant="outline"
        className="cursor-pointer text-slate-500 flex justify-center  mb-5 p-6 flex gap-1 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
        onClick={() => router.back()}
      >
        <RiArrowLeftDoubleLine className="text-2xl animate-pulse" />
        Back
      </Button>

      <h2 className="font-bold p-[8px] text-[22px] mb-4">Doctor details</h2>
      <div className="flex">
        {/* Doctor Details */}
        <div className="col-span-3 mb-4">
          {doctor && <DoctorDetails doctor={doctor} />}
        </div>
        {/* Doctor Suggestion */}
        <div className="hidden xl:block ml-4 shadow-lg rounded-[10px] p-4 ">
          <DoctorSuggestionList />
        </div>
      </div>
    </div>
  );
};

export default Details;
