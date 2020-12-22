import { useState } from "react";
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

  const checkAnswer = (question, answerAttempt) => {
    const answerCorrect = question.answer === answerAttempt;
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

  return [questions, updateQuestions, chapQnsLinkState, checkAnswer];
}
export default useGameState;
