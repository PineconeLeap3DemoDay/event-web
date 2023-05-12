import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.pageYOffset >= 20) {
      setNavbar((p) => (p = true));
    } else {
      setNavbar((p) => (p = false));
    }
  };

  // hide navigation bar functionality
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      if (lastScrollY > scrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", updateScroll); // add event listener
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", updateScroll); // clean up
      window.removeEventListener("scroll", changeBackground);
    };
  }, [show]);

  return (
    <div className={`w-full h-[80px] fixed duration-[0.3s] z-10 ${show ? "top-[-80px]" : "top-0 "} ${navbar && "bg-[#0A000B]"}`}>
      <div className="h-full max-w-[1920px] w-full px-[60px] m-auto flex flex-row justify-between items-center text-[#fff] relative">
        {/* left logo */}
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          <h1 className="text-[24px] font-['Roboto']">UB EVENTS</h1>
        </button>
        {/* right profile avatar */}
        <button className="flex items-center gap-[10px] justify-center " onClick={() => setDropDown((p) => !p)}>
          <Image
            src="https://images.unsplash.com/photo-1682424609336-9f71d1df4f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"
            width={40}
            height={40}
            alt="user avatar"
            className="rounded-[50%] w-[40px] h-[40px]"
          />
          <h2 className="font-['Inter'] font-normal pl-[5px]">Doljinsuren</h2>
          <Image
            src="/otherIcons/navbar-arrowDown.svg"
            width={30}
            height={30}
            alt="user avatar"
            className={`w-[30px] h-[30px] duration-[0.3s] ${dropDown ? "rotate-[-180deg]" : "rotate-0"}`}
          />
        </button>
        <div
          className={`flex flex-col w-[245px] p-[20px]  absolute right-[25px] duration-[0.3s] z-[-1] rounded-[8px] box-border 
          ${navbar && "bg-[#0A000B]"} ${dropDown ? "top-[60px] opacity-100" : "top-[0] opacity-0"} `}
        >
          {["Хадгалсан", "Тасалбар", "Календар", "Тохиргоо"].map((el, i) => {
            return (
              <div key={i} className={`flex flex-row h-[45px] items-center px-[10px] justify-between `}>
                <h2>{el}</h2>
                <Image
                  src="/otherIcons/navbar-arrowDown.svg"
                  width={30}
                  height={30}
                  alt="user avatar"
                  className="w-[30px] h-[30px] rotate-[-90deg]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
