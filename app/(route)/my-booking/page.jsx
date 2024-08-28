"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import BookingList from "./_components/BookingList";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
const MyBooking = () => {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    user && getUserBookingList();
  }, [user]);

  const getUserBookingList = () => {
    GlobalApi.getUserBookingList(user?.email).then((resp) => {
      console.log(resp.data.data);
      setBookingList(resp.data.data);
    });
  };

  const filterUserBooking = (Type) => {
    const result = bookingList.filter((item) =>
      Type == "upcoming"
        ? new Date(item.attributes.Date) >= new Date()
        : new Date(item.attributes.Date) <= new Date()
    );
    console.log(result);
    return result;
  };

  return (
    <div className="min-h-[90vh]">
      <Button
        variant="outline"
        className="cursor-pointer text-slate-500 flex justify-center p-6 flex gap-1 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
        onClick={() => router.back()}
      >
        <RiArrowLeftDoubleLine className="text-2xl animate-pulse" />
        Back
      </Button>
      <div className="text-center">
        <h1 className="font-bold p-[8px] mb-[32px] text-slate-600 text-[24px] bg-gradient-to-tr from-slate-800 via-slate-400 to-slate-600 inline-block text-transparent bg-clip-text">
          My Booking
        </h1>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <BookingList
              bookingList={filterUserBooking("upcoming")}
              updateRecord={() => getUserBookingList()}
              expired={false}
            />
          </TabsContent>
          <TabsContent value="expired">
            <BookingList
              bookingList={filterUserBooking("expired")}
              updateRecord={() => getUserBookingList()}
              expired={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyBooking;
