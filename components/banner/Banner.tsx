"use client";

import styles from "@/styles/components/shared/Banner.module.css";
import ArrowDown from "../icons/ArrowDown";
import { useEffect, useState } from "react";

const Banner = ({
  bgUrl,
  title,
  subTitle,
}: {
  bgUrl: string;
  title?: string;
  subTitle?: string;
}) => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const calculatedOpacity = scrollPosition / 300;
      const newOpacity = 1 - Math.min(Math.max(calculatedOpacity, 0), 1);
      setOpacity(newOpacity);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleArrowDownClick = () => {
    const vh = window.innerHeight;
    const targetVh = 66 / 100;
    const targetPx = vh * targetVh;

    window.scrollTo({
      top: targetPx,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${bgUrl})` }}>
      <div
        className="flex flex-col items-center max-w-[800px] text-center box-boder z-10"
        style={{ opacity }}
      >
        <h1 className="md:text-heading1-bold text-heading4-bold mb-[22px]">
          {title}
        </h1>
        <p className="md:text-body-normal text-small-regular mb-[30px]">
          {subTitle}
        </p>
        <ArrowDown onClick={handleArrowDownClick} />
      </div>
    </div>
  );
};

export default Banner;
