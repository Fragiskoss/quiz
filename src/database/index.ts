//import { quizzes } from "@/database/mocks"

import { prisma } from "@/prisma/client"

export const db = {
  getQuizzes: async () => {
    const quizzes = await prisma.quiz.findMany({
      orderBy:{title: "asc"}
    })
    return Promise.resolve(quizzes)
  },
  getQuizById: async (id: string) => {
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: { include: { answers: true } }
      }
    })


    return Promise.resolve(quiz)
  }
}