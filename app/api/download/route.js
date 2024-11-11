import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "assets",
    "resume",
    "resume.pdf"
  );
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Disposition": 'attachment; filename="Clinton_Nguyen_Resume.pdf"',
      "Content-Type": "application/pdf",
    },
  });
}
