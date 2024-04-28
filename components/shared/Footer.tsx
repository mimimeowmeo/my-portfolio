"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="py-14 flex flex-col gap-3">
      <p className="text-light-5 text-small-regular text-center">
        Powered by passion and motivation to make a difference in this world
      </p>
      <div className="flex justify-center gap-3">
        <FontAwesomeIcon
          className="text-light-1 hover:text-primary-500 cursor-pointer fa-2xl"
          icon={faGithub}
          onClick={() => handleIconClick("https://github.com/mimimeowmeo")}
        />
        <FontAwesomeIcon
          className="text-light-1 hover:text-primary-500 cursor-pointer fa-2xl"
          icon={faLinkedin}
          onClick={() => handleIconClick("https://www.linkedin.com/in/yc-yu/")}
        />
      </div>
    </div>
  );
};

export default Footer;
