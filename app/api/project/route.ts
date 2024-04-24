import { projectList } from "@/data/mock";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      data: projectList,
    },
    { status: 200 }
  );
}
