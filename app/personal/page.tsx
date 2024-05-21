import PreviewWebCard from "@/components/cards/PreviewWebCard";
import { personalList } from "@/data/mock";

const page = () => {
  return (
    <>
      <div className="h-20 w-full" />
      <section className="relative w-full py-8 px-20 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-20">
        {personalList.map(({ url, previewImage }) => {
          return (
            <PreviewWebCard key={url} url={url} previewImage={previewImage} />
          );
        })}
      </section>
    </>
  );
};

export default page;
