import { TextImageTemplateProps } from "@/components/template/TextImageTemplate";
import { NextResponse } from "next/server";

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

export async function GET() {
  return NextResponse.json(projectList, { status: 200 });
}
