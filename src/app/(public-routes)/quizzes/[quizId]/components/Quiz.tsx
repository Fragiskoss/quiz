'use client'

import { Question, Quiz } from "@/database/types";
import { submitAnswer } from "@/actions/index";
import {Box, Button, Card, CardContent, CardHeader, Stack, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";


export const QuizComponent = ({ quiz }: { quiz: Quiz }) => {
  return (
    <Stack spacing={2} sx={{padding:4}}>
      <Typography variant="h4">{quiz.title}</Typography>
      <Typography>{quiz.description}</Typography>
      <Stack spacing={2}>
        {quiz.questions.map((question) => (<QuestionComponent key={question.id} question={question} />))}
        </Stack>
    </Stack>
  );
};

const QuestionComponent = ({ question }: { question: Question }) => {
  const [value, setValue] = useState<string | undefined>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = async () => {
    console.log("clicked submit with value", value)
    if (!value) {
      console.log("cannot submit, value is missing")
    return
    }
    await submitAnswer(value)
  }

  return (
    <Card elevation={3} sx={{ width: 400 }}>
      <CardHeader title={question.text} />
      <CardContent>
        <Box>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Answers
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {question.answers.map((answer) => (
                <>
                  <FormControlLabel
                    key={answer.id}
                    value={answer.id}
                    control={<Radio />}
                    label={answer.text}
                  />
                </>
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" onClick={onClick}>
          Submit Answer
        </Button>
      </CardContent>
    </Card>
  );
};