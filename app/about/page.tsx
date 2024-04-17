"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const [icon, setIcon] = useState(faCopy);

  const handleIconClick = () => {
    navigator.clipboard.writeText("freoin1923@gmail.com");
    setIcon(faCheck);
    setTimeout(() => setIcon(faCopy), 2000);
  };

  return (
    <>
      <div className="h-20 w-full" />
      <article className="flex flex-col gap-16 px-6">
        <section className="w-full">
          <img
            src="/assets/aboutBanner.jpg"
            alt="project"
            className="object-fill w-full md:max-h-[400px]"
          />
        </section>
        <section className="flex flex-col gap-16 w-auto text-center md:mx-48">
          <span className="text-heading3-regular ">
            Hello! I'm a Front-End Developer with a passion for creating
            intuitive and engaging user interfaces. With a strong foundation in
            HTML, CSS, and JavaScript, as well as experience with modern
            frameworks like React and Next.js, I strive to build responsive and
            accessible web applications that provide a seamless user experience.
          </span>
          <span className="flex flex-col gap-3 justify-center">
            <p className="text-light-1 text-base-semibold italic mb-8">
              Highlights
            </p>
            <p className="text-light-5 text-base-regular">
              Streamlining Back-office Development Coordination Across Diverse
              Teams (2021)
            </p>
          </span>

          <span className="flex flex-col gap-3 justify-center">
            <p className="text-light-1 text-base-semibold italic mb-8">
              Contact
            </p>
            <p className="flex justify-center items-center gap-3 text-light-5 text-base-regular">
              freoin1923@gmail.com
              <FontAwesomeIcon
                className={`${
                  icon === faCopy
                    ? "hover:text-blue cursor-pointer"
                    : "text-blue"
                }`}
                icon={icon}
                width={16}
                height={16}
                onClick={handleIconClick}
              />
            </p>
          </span>
        </section>
      </article>
    </>
  );
};

export default page;
