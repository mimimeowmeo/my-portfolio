import PreviewCard from "@/components/cards/PreviewCard";
import Banner from "@/components/banner/Banner";
import { projectList } from "@/data/mock";

export default async function Home() {
  return (
    <>
      <section className="fixed w-full top-0 left-0 z-10 bg-red-100">
        <Banner
          bgUrl="/assets/banner.jpg"
          title="I'm Lance Yu, a passionate front-end developer dedicated to creating user-friendly and enjoyable browsing experiences across diverse platforms and audiences."
          // subTitle="I have a passion for programming and a keen interest in algorithms."
        />
      </section>
      <div className="h-[75vh] w-full" />
      <section className="relative w-full bg-dark-1 py-8 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-20">
        {projectList.map(({ id, title, urlName, year, previewImage }) => {
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
