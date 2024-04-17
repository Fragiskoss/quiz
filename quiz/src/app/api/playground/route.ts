import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export const GET = async () => {
  await prisma.answer.createMany({
    data: [
      { text: "Athens", isCorrect: true, questionId: "661e4141a483b6d6cc1019ba" },
      { text: "Thessaloniki", isCorrect: false, questionId: "661e4141a483b6d6cc1019ba" },
      { text: "Patra", isCorrect: false, questionId: "661e4141a483b6d6cc1019ba" }
    ]
  })
  const quiz = await prisma.quiz.findUnique({
    where: { id: "661e4141a483b6d6cc1019ba" },
    include: {
      questions: { include: { answers: true }}
    }
   })
  
  return NextResponse.json({ quiz });
};
