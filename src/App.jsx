import { useState, useMemo, useEffect } from "react";
import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";
import { gameData, gameState } from "./data/gameState";
import { QUESTIONSTATUS } from "./data/constants";
import useGame from "./hooks/useGame.js";

function App() {
  const [storyDisplay, toggleStoryDisplay] = useState(true);

  const [currentChapter, currentChapterIndex, setCurrentChapterIndex] = useGame(
    gameData
  );

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

  useEffect(() => {
    if (gameState.overall.currentChapter !== currentChapterIndex) {
      updateQuestions(chapQnsLinkState());
    }
    // eslint-disable-next-line
  }, [currentChapter]);
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
        .length === 0
    );
  }, [questions]);

  useEffect(() => {
    if (readyNextChapter) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyNextChapter]);

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
