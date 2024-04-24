"use client";
import { PartialExcept } from "@/lib/utils";
import { Fragment, ImgHTMLAttributes, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

type TextImageTemplate = {
  id: number;
  direction: "row" | "col";
  priorityType: "image" | "text";
  carousel: boolean;
  imageList: ImgHTMLAttributes<HTMLImageElement>[] | [];
  textList: TextProps[] | [];
  templateTitlePrefix: string;
  templateTitle: string;
  templateSubtitle: string;
  urlLink: string;
};

export type TextImageTemplateProps = PartialExcept<TextImageTemplate, "id">;

type ImageDirection = {
  [K in TextImageTemplate["direction"]]: K extends "row" ? "col" : "row";
};

type ImageSectionProps = Pick<
  TextImageTemplateProps,
  "imageList" | "direction"
> &
  Partial<Pick<TextImageTemplateProps, "carousel">>;

type TextProps = {
  titlePrefix?: string;
  title?: string;
  subtitle?: string;
  paragraph: string;
};

type TextSectionProps = Pick<TextImageTemplateProps, "direction" | "textList">;

const REVERSE_DIRECTION: ImageDirection = {
  row: "col",
  col: "row",
};

const MD = 768;

const ImageSection = ({
  carousel = false,
  imageList,
  direction,
}: ImageSectionProps) => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < MD);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`flex-1 flex flex-col ${
        direction === "row" ? "md:flex-row" : "md:flex-col"
      } justify-center items-center gap-2 mb-8`}
    >
      {carousel && !isMediumScreen ? (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {imageList &&
            imageList.map(({ className, ...imgProps }) => (
              <img
                key={imgProps.src}
                className={`flex-1 w-full h-full max-h-[500px] object-contain overflow-hidden ${className}`}
                {...imgProps}
              />
            ))}
        </Carousel>
      ) : (
        imageList &&
        imageList.map(({ className, ...imgProps }) => (
          <img
            key={imgProps.src}
            className={`flex-1 w-full h-full max-h-[500px] object-contain overflow-hidden ${className}`}
            {...imgProps}
          />
        ))
      )}
    </div>
  );
};

const TextSection = ({ textList, direction }: TextSectionProps) => (
  <div
    className={`flex-1 ${
      direction === "col" ? "text-center" : "text-start"
    } w-full h-full`}
  >
    {textList &&
      textList.map(({ titlePrefix, title, subtitle, paragraph }) => (
        <div key={title} className="mb-8">
          <p className="text-light-6 text-small-bold italic uppercase">
            {titlePrefix}
          </p>
          <p className="text-light-1 text-heading3-semibold">{title}</p>
          <p className="text-light-1 text-body-normal">{subtitle}</p>
          {(titlePrefix || title || subtitle) && <br />}
          {paragraph.split("\n").map((line, index) => (
            <Fragment key={index}>
              {line.split("<br />").map((subLine, subIndex) => (
                <Fragment key={subIndex}>
                  <p className="text-light-1 text-base-regular">{subLine}</p>
                  {subIndex < line.split("<br />").length - 1 && <br />}
                </Fragment>
              ))}
              {index < paragraph.split("\n").length - 1 && (
                <p className="text-light-1 text-base-regular"></p>
              )}
            </Fragment>
          ))}
        </div>
      ))}
  </div>
);

const TextImageTemplate = ({
  direction = "row",
  priorityType = "text",
  carousel,
  imageList,
  textList,
  templateTitlePrefix,
  templateTitle,
  templateSubtitle,
  urlLink,
}: Partial<Omit<TextImageTemplateProps, "id">>) => {
  const imageSectionDirection = REVERSE_DIRECTION[direction];

  return (
    <>
      <div className="relative mb-20 flex flex-col items-center">
        <span className="text-start">
          <p className="text-light-6 text-small-bold italic">
            {templateTitlePrefix}
          </p>
          <p className="text-light-1 text-heading3-regular">{templateTitle}</p>
        </span>
        <p className="text-light-1 text-body-normal">{templateSubtitle}</p>
        {urlLink && (
          <button
            className="mt-5 p-5 border-2 border-primary-500 text-body-normal text-light-1 rounded-full hover:bg-primary-500"
            type="button"
            onClick={() => window.open(urlLink, "_blank")}
          >
            View Website
          </button>
        )}
      </div>
      <div
        className={`flex flex-col ${
          direction === "row" ? "md:flex-row" : "md:flex-col"
        } 
        gap-3 justify-center items-center text-center`}
      >
        {
          {
            text: (
              <>
                {textList && !!textList.length && (
                  <TextSection direction={direction} textList={textList} />
                )}
                {imageList && !!imageList.length && (
                  <ImageSection
                    carousel={carousel}
                    imageList={imageList}
                    direction={imageSectionDirection}
                  />
                )}
              </>
            ),
            image: (
              <>
                {imageList && !!imageList.length && (
                  <ImageSection
                    carousel={carousel}
                    imageList={imageList}
                    direction={imageSectionDirection}
                  />
                )}
                {textList && !!textList.length && (
                  <TextSection direction={direction} textList={textList} />
                )}
              </>
            ),
          }[priorityType]
        }
      </div>
    </>
  );
};

export default TextImageTemplate;
