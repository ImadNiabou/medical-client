import React from "react";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const CancelAppointment = ({ onContinueClick }) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            className="cursor-pointer text-slate-500 flex justify-center mb-5 p-6 flex gap-1 font-semibold mt-4 text-slate-800 rounded-xl transition focus:outline-none hover:bg-primary hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
            variant="outline"
          >
            Cancel Appointment
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              appointment
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onContinueClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CancelAppointment;
