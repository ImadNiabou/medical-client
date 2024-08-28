import { FaPlayCircle } from "react-icons/fa";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import CountUp from "react-countup";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero = () => {
  const video =
    "https://cdn.pixabay.com/video/2020/09/13/49815-458438877_large.mp4";
  const { user } = useKindeBrowserClient();
  useEffect(() => {}, [user]);
  console.log(user);
  return (
    <div>
      {/* hero section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 rounded-xl bg-gradient-to-tr from-gray-950 via-gray-600 to-primary">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
            <div className="fadeInDown relative  overflow-hidden sm:h-80 lg:order-last md:h-full  ">
              <img
                alt=""
                src="/hero-5.png"
                className="hidden lg:block drop-shadow-lg hero-img inset-0 object-cover z-[2]"
              />
            </div>

            <div className="fadeInUp lg:py-24 pl-[20px]">
              <h2 className="text-3xl text-white font-bold sm:text-4xl">
                Find & Book{" "}
                <span className="bg-gradient-to-tr from-primary via-primary to-secondary  inline-block text-transparent bg-clip-text">
                  Appointment
                </span>{" "}
                with your fav Doctors
              </h2>

              <p className="mt-4 text-gray-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              {user ? (
                <div className="mt-[20px]">
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex gap-2 bg-transparent text-white transition-all duration-300 ease"
                        >
                          Explore more
                          <FaPlayCircle className="text-xl" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] ">
                        <DialogHeader>
                          <DialogTitle>
                            <p className="mt-[4px]">{`Welcome ${user.given_name}`}</p>
                          </DialogTitle>
                        </DialogHeader>
                        <article>
                          <iframe
                            className="w-full h-[240px]"
                            src={video}
                            type={video}
                            width="750"
                            height="500"
                            autoPlay
                            muted
                            controls
                          />
                        </article>
                        <div className="grid gap-4 py-4"></div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ) : (
                <LoginLink>
                  <Button className="p-6 font-semibold mt-6 text-slate-800 rounded-xl transition  focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg">
                    Get Started
                  </Button>
                </LoginLink>
              )}
              <div className="flex mt-[26px] justify-stretch">
                <div className="flex flex-col mr-[40px] w-[70px]">
                  <span className="text-[24px] text-slate-200">
                    <CountUp end={2700} duration={10} />
                    <span className="ml-[2px] text-primary">+</span>
                  </span>
                  <span className="text-slate-200">Reviews</span>
                </div>
                <div className="flex justify-center flex-col mr-[40px] w-[70px]">
                  <span className="text-[24px] text-slate-200">
                    <CountUp start={748} end={1200} duration={10} />
                    <span className="ml-[2px] text-primary">+</span>
                  </span>
                  <span className="text-slate-200">Customers</span>
                </div>
                <div className="flex justify-center flex-col w-[70px]">
                  <span className="text-[24px] text-slate-200">
                    <CountUp end={24} />
                    <span className="ml-[2px] text-primary">+</span>
                  </span>
                  <span className="text-slate-200">Doctors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
