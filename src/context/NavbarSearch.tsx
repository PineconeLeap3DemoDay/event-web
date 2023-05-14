import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const Show = createContext<{
  show: boolean;
  navbar: boolean;
  search: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setNavbar: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const NavbarSearch = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState(false);

  // hide navigation bar functionality
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    //     setSearch(false);
    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      if (lastScrollY > scrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = scrollY;
      setNavbar(window.pageYOffset > 120);
    };
    window.addEventListener("scroll", updateScroll); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScroll); // clean up
    };
  }, [show]);
  const changes = {
    show,
    navbar,
    search,
    setShow,
    setNavbar,
    setSearch,
  };

  return <Show.Provider value={changes}>{children}</Show.Provider>;
};

export const useChangesNavbarSearch = () => useContext(Show);
