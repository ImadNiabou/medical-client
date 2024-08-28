"use client";
import { useEffect, useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import GlobalApi from "./_utils/GlobalApi";
import Questions from "./_components/Questions";

export default function Home() {
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

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
      <Questions />
    </div>
  );
}
