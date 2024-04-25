import TextImageTemplate, {
  TextImageTemplateProps,
} from "@/components/template/TextImageTemplate";
import { projectList } from "@/data/mock";

const page = async ({ params }: { params: { name: string } }) => {
  const data = projectList.find((project) => project.urlName === params.name);
  const { bannerUrl, article = [] } = data || {};

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
