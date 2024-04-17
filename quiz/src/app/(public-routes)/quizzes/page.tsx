import { QuizList } from "@/app/(public-routes)/quizzes/components/QuizList";
import { db } from "@/database"

const Page = async () => {
  const quizzes = await db.getQuizzes()
console.log({quizzes})
  return <><QuizList quizzes={quizzes} /></>;
};

export default Page;