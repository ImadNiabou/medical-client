import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import BookAppointment from "./BookAppointment";
const DoctorDetails = ({ doctor }) => {
  return (
    <>
      <div className="w-full my-[18px] py-[28px] px-[20px] p-[10px] shadow-lg rounded-[14px] mx-auto  col-span-3 grid grid-cols-1 lg:grid-cols-3 min-w-xl">
        {/* Doctdor Image */}
        <div className="mr-[20px]">
          <img
            src={doctor?.attributes?.Image?.data?.attributes?.url}
            alt="doctor"
            width={300}
            height={300}
            className="object-cover w-full h-[354px] w-[400px] rounded-[8px]"
          />
        </div>
        {/* Doctdor Info */}
        <div className="col-span-2 text-xl mt-5 flex flex-col gap-2 items-baseline">
          <h2 className="m-2 font-bold text-gray-700">
            {doctor.attributes?.Name}
          </h2>
          <h2 className="text-secondary m-2 flex gap-2">
            <GraduationCap className="text-secondary" />
            <span className="text-slate-500">
              {doctor.attributes?.Year_of_experience} of experince
            </span>
          </h2>

          <h2 className="text-gray-500  h-[46px] flex gap-2">
            <MapPin className="text-secondary" />
            <span>{doctor.attributes?.Adress}</span>
          </h2>
          <h2 className="text-[18px] bg-gradient-to-tr text-secondary from-primary/5 to-secondary/20 rounded-xl px-4 py-2 font-semibold">
            {doctor.attributes?.Categories}
          </h2>
          <div className="flex gap-3 mt-[10px] ">
            <FaLinkedin className="text-[30px] text-slate-500 hover:text-slate-800 font-semibold  text-center transition-all  duration-500" />
            <FaSquareXTwitter className="text-[30px] text-slate-500 hover:text-slate-800 transition-all duration-500" />
            <FaFacebookSquare className="text-[30px] text-slate-500 hover:text-slate-800 transition-all duration-500" />
            <FaYoutube className="text-[30px] text-slate-500 hover:text-slate-800 transition-all duration-500" />
          </div>

          <BookAppointment doctor={doctor} />
        </div>
      </div>
      <div className="shadow-lg p-[20px] mb-[16px] rounded-[12px]">
        <h2 className=" mt-[10px] p-[6px] font-bold text-[20px]">About Me</h2>
        <span className="mb-[24px] text-slate-500 tracking-wide mt-2">
          {doctor.attributes?.About}
        </span>
      </div>
    </>
  );
};

export default DoctorDetails;
