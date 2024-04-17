"use client";

import styles from "@/styles/components/shared/Banner.module.css";
import ArrowDown, { ArrowDownProps } from "../icons/ArrowDown";
import { useEffect, useState } from "react";

const Banner = ({
  bgUrl,
  title,
  subTitle,
  onArrowDownClick,
}: {
  bgUrl: string;
  title?: string;
  subTitle?: string;
  onArrowDownClick: ArrowDownProps["onClick"];
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
        <ArrowDown onClick={onArrowDownClick} />
      </div>
    </div>
  );
};

export default Banner;
