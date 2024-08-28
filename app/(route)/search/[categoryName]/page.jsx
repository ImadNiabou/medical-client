"use client";
import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
function Search({ params }) {
  const [doctorList, setDoctroList] = useState([]);
  useEffect(() => {
    // console.log(params.categoryName);
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.categoryName).then((resp) => {
      // console.log(resp);
      setDoctroList(resp.data.data);
    });
  };
  return (
    <div className="ml-[20px] md:ml-[80px]">
      <div className="grid grid-cols 2 gap-4">
        <DoctorList heading={params.categoryName} doctorList={doctorList} />
      </div>
    </div>
  );
}

export default Search;
