"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import BookingList from "../my-booking/_components/BookingList";

const BookAppointment = ({ doctor }) => {
  const [seeAppointment, setSeeAppointment] = useState();
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedSlot, setSelectedSlot] = useState();
  const [note, setNote] = useState();
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
      setTimeSlot(timeList);
    }
  };

  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const saveBooking = () => {
    const data = {
      data: {
        UserName: user.given_name + "" + user.family_name,
        Email: user.email,
        Time: selectedSlot,
        Date: date,
        doctor: doctor.id,
        Note: note,
      },
    };
    console.log(data);
    GlobalApi.bookAppointment(data).then((resp) => {
      console.log(resp);
      setSeeAppointment(resp);
      if (resp) {
        toast("Booking Confirmation will send on Email");
      }
    });
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex gap-4 ">
          <Button
            type="button"
            className="p-6 font-semibold mt-4 text-slate-800 rounded-xl transition  focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
          >
            Book Now
          </Button>

          {seeAppointment && (
            <Button
              variant="outline"
              className="cursor-pointer text-slate-500 flex justify-center mb-5 p-6 flex gap-1 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
            >
              <Link href={"/my-booking"}>See Appointment</Link>
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-secondary mb-1 ">
              Book Appointment
            </DialogTitle>
            <DialogDescription>
              <div>
                <div className="grid grid-col-1  md:grid-cols-2">
                  {/* Calendar */}
                  <div className=" flex flex-col items-baseline">
                    <h2 className="flex gap-2 items-center p-3">
                      <IoCalendarNumberOutline className="text-secondary  text-xl" />
                      <p className="font-semibold text-lg ">Select Date</p>
                    </h2>
                    <div>
                      <Calendar
                        disabled={isPastDay}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                  {/* Time Slot */}
                  <div>
                    <h2 className="flex gap-2 items-center p-3 ">
                      <FaRegClock className="text-secondary text-xl" />
                      <p className="font-semibold text-lg py-1">
                        Select Time Slot
                      </p>
                    </h2>
                    <div className="bg-white grid grid-cols-3 gap-2 p-3 rounded-lg border border-1 border-slate-200 rounded-md">
                      {timeSlot &&
                        timeSlot.map((item, index) => (
                          <div key={index}>
                            <h2
                              onClick={() => setSelectedSlot(item.time)}
                              className={`cursor-pointer hover:text-slate-700 p-2 border transition-all duration-200 ease-in-out  hover:bg-primary rounded-lg text-center border-slate-300 ${
                                item.time == selectedSlot && "bg-primary"
                              }`}
                            >
                              {item.time}
                            </h2>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild className="flex gap-2 justify-between">
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-lg bg-red-100 hover:bg-red-200 transition-all duration-300 ease text-slate-800"
                >
                  Close
                </Button>
                <Button
                  disabled={!(date && selectedSlot)}
                  type="button"
                  className="rounded-lg"
                  onClick={() => saveBooking()}
                >
                  Submit
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
          <textarea
            onChange={handleNote}
            placeholder="Type your message here."
            className="outline-none border p-4 rounded-lg rows-50 min-h-[140px]"
          />
        </DialogContent>
        <div className="hidden">
          <BookingList saveBooking={saveBooking} />
        </div>
      </Dialog>
    </div>
  );
};

export default BookAppointment;
