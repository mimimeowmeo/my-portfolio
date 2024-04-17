"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/components/shared/Topbar.module.css";
import { topbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Hamburger from "../icons/Hamburger";
import ModalWrap from "../modal/ModalWrap";

const Topbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 z-30 flex w-full items-center justify-between ${
        isScrolled ? "bg-dark-2" : "bg-transparent"
      } px-6 py-3`}
    >
      <Link href={topbarLinks[0].route}>
        <p className="text-primary-500 text-heading1-bold">YO!</p>
      </Link>
      <div className="flex justify-end w-full">
        {topbarLinks.map(({ route, label }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;
          return (
            <Link
              href={route}
              key={label}
              className={`p-4 max-md:hidden ${
                isActive
                  ? "text-light-1 font-bold"
                  : "text-light-5 hover:text-light-2"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <div className="hidden max-md:block" onClick={toggleModal}>
          <Hamburger />
        </div>
      </div>
      <div
        className={`hidden ${showModal && "max-md:block"}`}
        onClick={toggleModal}
      >
        <ModalWrap>
          <div className="flex flex-col justify-center align-center w-full">
            {topbarLinks.map(({ route, label }) => {
              const isActive =
                (pathname.includes(route) && route.length > 1) ||
                pathname === route;
              return (
                <Link
                  href={route}
                  key={label}
                  className="p-4 text-heading4-medium"
                >
                  <p
                    className={`${
                      isActive
                        ? "text-light-1"
                        : "text-light-5 hover:text-light-2"
                    }`}
                  >
                    {label}
                  </p>
                </Link>
              );
            })}
          </div>
        </ModalWrap>
      </div>
    </nav>
  );
};

export default Topbar;
