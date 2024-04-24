import TextImageTemplate, {
  TextImageTemplateProps,
} from "@/components/template/TextImageTemplate";

export type ProjectData = {
  id: string;
  bannerUrl?: string;
  title: string;
  description?: string;
  previewImage: string;
  urlName: string;
  year?: string | [string, string];
  article: TextImageTemplateProps[];
};

const API_URL = process.env.API_URL;

const page = async ({ params }: { params: { name: string } }) => {
  const res = await fetch(`${API_URL}/api/project/${params.name}`, {
    cache: "no-cache",
  });
  const data: { data: ProjectData } = await res.json();
  const { bannerUrl, article = [] } = data.data || {};

  return (
    <>
      <div className="h-20 w-full" />
      <article className="flex flex-col justify-start items-center gap-16 px-6">
        {bannerUrl && (
          <section className="w-full h-full">
            <img
              src={bannerUrl}
              alt="project"
              className="object-fill w-full h-full"
            />
          </section>
        )}
        {article.map(({ id, ...props }: TextImageTemplateProps) => (
          <section key={id}>
            <TextImageTemplate {...props} />
          </section>
        ))}
      </article>
    </>
  );
};

export default page;
