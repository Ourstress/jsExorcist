import { useState, useMemo, useEffect } from "react";
import { QUESTIONSTATUS } from "../data/constants";

function useGameState(currentChapter, gameState) {
  const chapQnsLinkState = () => {
    const questionsClone = JSON.parse(JSON.stringify(currentChapter.questions));
    // check gameState has at least one entry for current chapter
    if (
      gameState &&
      gameState.chapters.hasOwnProperty(currentChapter.name) &&
      Object.keys(gameState.chapters[currentChapter.name]).length !== 0
    ) {
      questionsClone.forEach((question) => {
        question.status = gameState.chapters[currentChapter.name][question.id]
          ? gameState.chapters[currentChapter.name][question.id]["status"]
          : QUESTIONSTATUS.pending;
      });
    } else {
      questionsClone.forEach(
        (question) => (question.status = QUESTIONSTATUS.pending)
      );
    }
    return questionsClone;
  };
  const [questions, updateQuestions] = useState(chapQnsLinkState());

  const readyNextChapter = useMemo(() => {
    return (
      questions.filter((question) => question.status !== QUESTIONSTATUS.correct)
        .length === 0
    );
  }, [questions]);

  useEffect(() => {
    const updatedQuestions = questions.reduce((accumulator, question) => {
      accumulator[question.id] = {
        status: question.status,
        title: question.title,
      };
      return accumulator;
    }, {});

    const toBeUpdatedState = { ...gameState };
    if (JSON.stringify(toBeUpdatedState) !== "{}") {
      const toBeUpdatedState = { ...gameState };
      toBeUpdatedState.chapters[currentChapter.name] = updatedQuestions;
      sessionStorage.setItem(
        "gameState",
        JSON.stringify({
          ...toBeUpdatedState,
        })
      );
    }
    // eslint-disable-next-line
  }, [questions]);

  useEffect(() => {
    if (
      JSON.stringify(currentChapter.questions[0]["title"]) !==
      JSON.stringify(questions[0]["title"])
    ) {
      updateQuestions(chapQnsLinkState());
    }
    // eslint-disable-next-line
  }, [currentChapter]);

  const checkAnswer = (question, answerAttempt) => {
    const answerCorrect = question.answer.includes(answerAttempt);
    const questionToUpdate = questions.find(
      (item) => item.title === question.title
    );
    const questionToUpdateIndex = questions.findIndex(
      (item) => item.title === question.title
    );
    answerCorrect
      ? (questionToUpdate.status = QUESTIONSTATUS.correct)
      : (questionToUpdate.status = QUESTIONSTATUS.trying);

    const copyOfQuestions = [...questions];
    copyOfQuestions.splice(questionToUpdateIndex, 1, questionToUpdate);
    updateQuestions(copyOfQuestions);
  };

  return [questions, checkAnswer, readyNextChapter];
}
export default useGameState;
