import { db } from "@/database"
import { NextResponse, NextRequest } from "next/server";


interface RouteProps {
    params: {
        quizId: string
    }
}

export const GET = async (req: NextRequest, props: RouteProps) => {
    const quizId = parseInt(props.params.quizId);
    const quiz = await db.getQuizById(quizId);
    if (!quiz) {
        return NextResponse.json({ error: "Quiz not found" }, { status: 404 })
    }




    return NextResponse.json({data : quiz})
}