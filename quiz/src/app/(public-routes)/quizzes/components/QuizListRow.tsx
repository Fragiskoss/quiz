//import { Quiz } from "@/database/types";
import {Card, CardContent, CardHeader, Typography, Link as MuiLink} from "@mui/material";
import { Quiz } from "@prisma/client";
import Link from "next/link"


export const QuizListRow = ({ quiz }: { quiz: Quiz }) => {

  return (
    <Card elevation={0} sx={{border: "1px solid #ccc"}}>
      <CardHeader title={quiz.title}></CardHeader>
      <CardContent> <Typography>{quiz.description}</Typography>
      <MuiLink component={Link} href={`/quizes/${quiz.id}`}>Take the quiz</MuiLink>
      </CardContent>
    </Card>
  )
};
