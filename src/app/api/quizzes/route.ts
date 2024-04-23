import { NextResponse } from "next/server"


export const GET = () => {
    return NextResponse.json({
      data: "this will be the list of quizzes",
    });
}