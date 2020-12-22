import { useState, useMemo, useEffect } from "react";
import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";
import { gameData, gameState } from "./data/gameState";
import { QUESTIONSTATUS } from "./data/constants";
import useGameData from "./hooks/useGameData.js";
import useGameState from "./hooks/useGameState";

function App() {
  const [storyDisplay, toggleStoryDisplay] = useState(true);

  const [
    currentChapter,
    currentChapterIndex,
    setCurrentChapterIndex,
  ] = useGameData(gameData);

  const [
    questions,
    updateQuestions,
    chapQnsLinkState,
    checkAnswer,
  ] = useGameState(currentChapter, gameState);

  useEffect(() => {
    if (gameState.overall.currentChapter !== currentChapterIndex) {
      updateQuestions(chapQnsLinkState());
    }
    // eslint-disable-next-line
  }, [currentChapter]);

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
