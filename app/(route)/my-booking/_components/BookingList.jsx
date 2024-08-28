import React, { useState } from "react";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import moment from "moment/moment";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import CancelAppointment from "./CancelAppointment";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const BookingList = ({ bookingList, expired, updateRecord }) => {
  // const [handleBooking, setHandleBookng] = useState([]);
  const onDeleteBooking = (item) => {
    console.log(item);

    GlobalApi.deleteBooking(item.id).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("Booking Deleted Successfully!");
        updateRecord();
      }
      // setHandleBookng(resp);
    });
  };
  return (
    <div>
      {bookingList &&
        bookingList.map((item, index) => (
          <div
            key={index}
            className="fadeInUp flex gap-6 items-center my-10 p-10 shadow-lg rounded-xl"
          >
            <Image
              className="w-[100px] h-[100px] rounded-full object-cover"
              src={
                item.attributes.doctor.data?.attributes?.Image?.data?.attributes
                  ?.url
              }
              width={100}
              height={100}
              alt="doctor"
            />
            <div className="flex flex-col w-full ">
              <h2 className="text-md text-slate-600 font-bold items-center flex gap-3 justify-between">
                {item.attributes.doctor.data?.attributes.Name}
                {!expired && (
                  <CancelAppointment
                    onContinueClick={() => onDeleteBooking(item)}
                  />
                )}
              </h2>
              <h2>{item.attributes.doctor.data?.attributes.Email}</h2>
              <div className="flex gap-2 items-center">
                <FiPhone className="text-lg text-secondary" />
                <h2 className="text-slate-600">
                  {item.attributes.doctor.data?.attributes.Phone}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <IoLocationOutline className="text-lg text-secondary" />
                <h2 className="text-slate-500">
                  {item.attributes.doctor.data?.attributes.Adress}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <IoCalendarNumberOutline className="text-lg text-secondary" />
                <h2 className="text-slate-500">
                  <strong>Appointment</strong> on:{" "}
                  {moment(item.attributes.Date).format("DD-MMM-YYY")}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <IoTimeOutline className="text-lg text-secondary" />
                <h2 className="text-slate-600">
                  At Time: {item.attributes.Time}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <CgNotes className="text-lg text-secondary" />
                <h2 className="text-slate-600">
                  <Dialog>
                    <DialogTrigger
                      className="cursor-pointer text-slate-400"
                      asChild
                    >
                      <h2>See Note</h2>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader className="text-xl text-slate-700 font-bold">
                        Note:
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4"></div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <h2 className="text-xl text-slate-700 flex">
                            {item.attributes.Note}
                          </h2>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookingList;
