import { useState, useMemo, useEffect } from "react";
import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";
import gameState from "./data/gameState";
import { QUESTIONSTATUS } from "./data/constants";

function App() {
  const [storyDisplay, toggleStoryDisplay] = useState(true);

  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const currentChapter = useMemo(() => {
    return gameState.get(Array.from(gameState.keys())[currentChapterIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChapterIndex]);

  const [questions, updateQuestions] = useState(currentChapter.questions);

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

  const readyNextChapter = useMemo(() => {
    return (
      questions.filter((question) => question.status !== QUESTIONSTATUS.correct)
        .length === 0 && gameState.length > currentChapterIndex
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  useEffect(() => {
    if (readyNextChapter) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyNextChapter]);

  useEffect(() => {
    updateQuestions(currentChapter.questions);
  }, [currentChapter]);
  return (
    <div
      className="d-flex flex-column"
      style={{
        backgroundImage: `url(${jpMtn})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Navbar
        currentChapter={currentChapter}
        storyDisplay={storyDisplay}
        toggleStoryDisplay={toggleStoryDisplay}
        questions={questions}
      />
      <main
        className="container d-flex flex-column flex-grow-2"
        style={{
          justifyContent: "space-between",
        }}
      >
        <Game questions={questions} checkAnswer={checkAnswer} />
        <Story
          currentChapter={currentChapter}
          storyDisplay={storyDisplay}
          toggleStoryDisplay={toggleStoryDisplay}
        />
      </main>
    </div>
  );
}

export default App;
