import { db } from "@/database"
import { QuizComponent } from "@/app/(public-routes)/quizzes/[quizId]/components/Quiz";

interface PagePros {
  params: {
    quizId: string
  }
}

const Page = async (props: PagePros) => {
  const quizId = parseInt(props.params.quizId)
  const quiz = await db.getQuizById(quizId)
  
  return <>{quiz && <QuizComponent quiz={quiz} />}</>;
};

export default Page;