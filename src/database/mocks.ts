import { Quiz } from "@/database/types"

const geographyQuiz: Quiz = {
  id: 1,
  title: "Geography Quiz",
  description: "An easy quiz about country capital",
  questions: [
    {
      id: 1,
      text: "What is the capital of Greece",
      answers: [
        { id: 1, text: "Athens", isCorrect: true },
        { id: 2, text: "Thessaloniki", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "What is the capital of France",
      answers: [
        { id: 3, text: "Lyon", isCorrect: false },
        { id: 4, text: "Paris", isCorrect: true },
      ],
    },
  ],
};

const musicQuiz: Quiz = {
  id: 2,
  title: "Music Quiz",
  description: "A music quiz",
  questions: [],
};

export const quizzes: Quiz[] = [musicQuiz, geographyQuiz];
