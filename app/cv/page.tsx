import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
  return (
    <>
      <div className="h-20 w-full" />
      <a
        className="mt-5 p-5 border-2 border-primary-500 text-body-normal text-light-1 rounded-full hover:bg-primary-500 mb-10"
        href="assets/cv.pdf"
        download="lance_yu_software_developer_cv.pdf"
      >
        <FontAwesomeIcon icon={faPrint} /> Download CV
      </a>
      <div className="w-full">
        <iframe src="/assets/cv.pdf" className="w-full h-screen" title="cv" />
      </div>
    </>
  );
};

export default page;
