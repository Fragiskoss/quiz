"use client"
import { useEffect } from "react";
import { QuizListRow } from "@/app/(public-routes)/quizzes/components/QuizListRow";
import { Typography, Stack } from "@mui/material";
import { Quiz } from "@prisma/client";
//import { Quiz } from "@/database/types";

export const QuizList = (props: { quizzes: Quiz[] }) => {
  useEffect(() => {
    console.log("This is a log from within an effect");
  }, []);

  return (
    <>
  <Typography variant="h3">Quizzes</Typography>
      <Stack spacing={1} sx={{
        width: 600,
        padding: 1,
        marginTop: 1,
      }}>
        {props.quizzes.map(quiz => {
          return <QuizListRow key={quiz.id} quiz={quiz} />
        })}
    
        </Stack>
    </>
  );
};
