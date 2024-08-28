"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    message: z.string().min(1, "Message is required"),
  });
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    resetField("name");
    resetField("email");
    resetField("message");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulation of delay
      toast.success("Message submitted");
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="fadeInDown max-w-4xl mx-auto mb-[60px] p-6 bg-white text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-start p-10 shadow-lg rounded-lg space-y-4 max-w-2xl mx-auto "
      >
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`mt-1 block w-full rounded-md border border-slate-200 p-2 outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`mt-1 block w-full rounded-md rounded-md border border-slate-200  p-2 outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <h2 className="block text-slate-700">Describe Your Issue...</h2>
          <textarea
            id="message"
            className={`mt-1 block w-full rounded-md rounded-md border border-slate-200 p-2 outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            rows={5}
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            className={`w-full p-6 px-4 bg-primary text-slate-700 rounded-lg transition focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg ${
              !isValid || isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isValid || isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>

      <div className="mt-[80px] mb-[40px] fadeInUp ">
        <ul className="block md:flex justify-evenly">
          <li>
            <h3 className="font-bold text-xl text-slate-500">Adress</h3>
            <FaLocationDot className="shadow-lg p-4 rounded-full text-primary inline-block  text-7xl my-4" />
            <p className="text-slate-700">Lorem ipsum dolor sit</p>
          </li>
          <li>
            <h3 className="font-bold text-xl text-slate-500">Phone</h3>
            <FaPhone className="shadow-lg p-4 rounded-full text-primary inline-block  text-7xl my-4" />
            <p className="text-slate-700">+93 993 944 944</p>
          </li>
          <li>
            <h3 className="font-bold text-xl text-slate-500">Email</h3>
            <MdEmail className="shadow-lg p-4 rounded-full text-primary inline-block  text-7xl my-4" />
            <p className="text-slate-700">medical@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
