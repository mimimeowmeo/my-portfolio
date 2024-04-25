import { ProjectData } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";

export type PreviewCardProps = Pick<
  ProjectData,
  "title" | "previewImage" | "urlName" | "year"
>;

const PreviewCard = ({
  title,
  previewImage,
  urlName,
  year,
}: PreviewCardProps) => {
  return (
    <Link
      href={`/project/${urlName}`}
      className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
    >
      <div className="relative min-h-[250px] min-w-full mb-2">
        <Image src={previewImage} alt={title} fill />
      </div>
      <div className="pb-[4.5%] px-[8%] pt-[4%]">
        <p className="text-base-semibold text-light-1">{title}</p>
        <p className="text-small-regular text-light-5">
          {Array.isArray(year) ? `${year[0]} - ${year[1]}` : year}
        </p>
      </div>
    </Link>
  );
};

export default PreviewCard;
