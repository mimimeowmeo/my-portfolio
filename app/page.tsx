"use client";
import PreviewCard, { PreviewCardProps } from "@/components/cards/PreviewCard";
import Banner from "@/components/banner/Banner";

import { MOCK } from "./project/[name]/page";

export default function Home() {
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
    <>
      <section className="fixed w-full top-0 left-0 z-10 bg-red-100">
        <Banner
          bgUrl="/assets/banner.jpg"
          title="I'm Cacey Yu, a passionate front-end developer dedicated to creating user-friendly and enjoyable browsing experiences across diverse platforms and audiences."
          subTitle="I have a passion for programming and a keen interest in algorithms."
          onArrowDownClick={handleArrowDownClick}
        />
      </section>
      <div className="h-[75vh] w-full" />
      <section className="relative w-full bg-dark-1 pt-8 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-20">
        {MOCK.map(({ id, title, urlName, year, previewImage }) => {
          return (
            <PreviewCard
              key={id}
              title={title}
              year={year}
              urlName={urlName}
              previewImage={previewImage}
            />
          );
        })}
      </section>
    </>
  );
}
