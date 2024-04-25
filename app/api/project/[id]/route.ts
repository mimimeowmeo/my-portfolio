import { TextImageTemplateProps } from "@/components/template/TextImageTemplate";
import { NextResponse } from "next/server";

type Params = { id: string };

type Project = {
  id: string;
  bannerUrl?: string;
  title: string;
  description?: string;
  previewImage: string;
  urlName: string;
  year?: string | [string, string];
  article: TextImageTemplateProps[];
};
type ProjectData = { data: Project[] };
const projectList: ProjectData = require("@/data/mock");

export async function GET(request: Request, context: { params: Params }) {
  const data = projectList.data.find(
    (project) => project.urlName === context.params.id
  );
  return NextResponse.json(
    {
      data,
    },
    { status: 200 }
  );
}
