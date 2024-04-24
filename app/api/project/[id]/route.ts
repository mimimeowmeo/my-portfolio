import { projectList } from "@/data/mock";
import { NextResponse } from "next/server";

type Params = { id: string };

export async function GET(request: Request, context: { params: Params }) {
  const data = projectList.find(
    (project) => project.urlName === context.params.id
  );
  return NextResponse.json(
    {
      data,
    },
    { status: 200 }
  );
}
