import React, { FunctionComponent, useState, useContext } from "react";
import DashboardQuestionPaper from "./components/DashboardQuestionPaper";
import PageFormat from "../../sharedComponents/PageFormat";
import data from "../../data.json";
import { Box, Button } from "@mui/material";
import { CurrentIndexContext } from "../../App";

const QuestionPaper: FunctionComponent = () => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    { question: string; answer: string }[]
  >([]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    setSubmitClicked(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers([
      ...selectedAnswers,
      { question: data.questions[currentIndex].question, answer },
    ]);
    // This is storing the question and the answer selected by the user.
  };

  return (
    <PageFormat>
      {/* It will check if Submit Button is not clicked then show this otherwise show the answers selected by the user. */}
      {!submitClicked ? (
        // Initially the currentIndex is 0, so if it is less than tht total number of questions then it will show the mcq otherwise bring to submit page.
        currentIndex < data.questions.length ? (
          <Box key={currentIndex}>
            <DashboardQuestionPaper
              currentObject={data.questions[currentIndex]}
              onAnswerSelect={handleAnswerSelect}
            />
            <Box className={currentIndex > 0 ? "WithPrev" : "WithoutPrev"}>
              {currentIndex > 0 && (
                <Button onClick={handlePrevious}>Previous</Button>
              )}
              <Button onClick={handleNext}>Next</Button>
            </Box>
          </Box>
        ) : (
          <>
            <Button onClick={handlePrevious}>Previous</Button>
            <p>No more questions</p>
            <Button onClick={handleSubmit}>Submit</Button>
          </>
        )
      ) : (
        <>
          <b>Selected answers:</b>
          {selectedAnswers.map((answer, index) => (
            <p key={index}>
              Question: {answer.question}, Answer: {answer.answer}
            </p>
          ))}
        </>
      )}
    </PageFormat>
  );
};

export default QuestionPaper;
