"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.svg";
import { IoMenu } from "react-icons/io5";

import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user } = useKindeBrowserClient();
  useEffect(() => {}, [user]);
  console.log(user);
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "My Booking",
      path: "/my-booking",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex relative justify-between p-4 shadow-sm mb-6 align-center">
      <div className="flex items-center items-baselin gap-10 ">
        <Link href="/">
          <Image src={Logo} alt="logo" width={150} height={150} />
        </Link>

        <ul className="hidden lg:flex gap-8 justify-between text-slate-700 font-semibold">
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path} className="focus:text-primary">
                <li
                  className="transition-all ease-in-out hover:scale-105 duration-600 cursor-pointer"
                  key={item.id}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              className="rounded-full"
              src={user.picture}
              width={40}
              height={40}
              alt="Profile-Image"
            />
          </PopoverTrigger>
          <PopoverContent className="w-[200px] mt-[16px] bg-white p-0 border-none relative right-16 rounded-[10px]">
            <div>
              <ul className="rounded-[10px]">
                <li className="hover:text-slate-800 font-semibold hover:bg-primary text-center transition-all py-3 duration-500">
                  <Link href="/">Home</Link>
                </li>
                <li className=" hover:text-slate-800 font-semibold hover:bg-primary text-center transition-all py-3 duration-500">
                  <Link href="/my-booking">My Booking</Link>
                </li>
                <li className="rounded-b-[10px] pb-4 hover:text-slate-800 font-semibold hover:bg-primary text-center transition-all py-3 duration-500">
                  <LogoutLink>
                    <button variant="outline">Log Out</button>
                  </LogoutLink>
                </li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        (toast("You’ve been logged out"),
        (
          <div className="flex gap-2 items-center items-baseline">
            <div>
              <LoginLink>
                <Button
                  variant="outline"
                  className="p-6 hidden lg:flex font-semibold mt-4 text-slate-800 rounded-xl transition  focus:outline-none hover:scale-95 transition-all duration-400 ease-in-out hover:shadow-lg"
                >
                  Log In
                </Button>
              </LoginLink>
            </div>
            <div className="block lg:hidden">
              <IoMenu
                variant="outline"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-[40px] text-slate-800 cursor-pointer"
              ></IoMenu>
              {showMobileMenu && (
                <div className="relative">
                  <ul className="z-30 text-center flex flex-col lg:flex gap-8 justify-between text-slate-700 font-semibold mt-[46px] bg-white p-6 border-none right-[-16px] w-[200px] absolute rounded-[10px]">
                    <div>
                      <LoginLink>
                        <li className="transition-all ease-in-out duration-600 ">
                          Log In
                        </li>
                      </LoginLink>
                    </div>
                    {menu.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          href={item.path}
                          className="focus:text-primary "
                        >
                          <li
                            className="transition-all ease-in-out duration-600 "
                            key={item.id}
                          >
                            {item.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </nav>
  );
};

export default Header;
