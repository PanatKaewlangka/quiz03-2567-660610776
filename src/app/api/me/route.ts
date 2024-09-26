import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Panat Kaewlangka",
    studentId: "660610776",
  });
};
