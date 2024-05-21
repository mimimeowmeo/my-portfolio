import Image from "next/image";
import Link from "next/link";

type Props = { url: string; previewImage: string };
const PreviewWebCard = ({ url, previewImage }: Props) => {
  return (
    <a
      href={url}
      className="block hover:scale-105 transition-transform duration-300"
      target="_blank"
    >
      <div className="relative min-h-[250px] min-w-full mb-2 hover:opacity-80">
        <Image src={previewImage} alt={url} fill />
      </div>
    </a>
  );
};

export default PreviewWebCard;
