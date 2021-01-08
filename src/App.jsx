import { useState, useEffect } from "react";
import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";
import { gameData, gameState as defaultGameState } from "./data/gameState";
import useGameData from "./hooks/useGameData.js";
import useGameState from "./hooks/useGameState";
import useFirebase from "./hooks/useFirebase";
import useLogs from "./hooks/useLogs";

function App() {
  const [storyDisplay, toggleStoryDisplay] = useState(true);

  const gameState = JSON.parse(sessionStorage.getItem("gameState")) || defaultGameState;
  const [currentChapter, currentChapterIndex, setCurrentChapterIndex] = useGameData(
    gameData,
    gameState
  );

  const [questions, checkAnswer, readyNextChapter] = useGameState(
    currentChapter,
    gameState,
    currentChapterIndex
  );

  const advanceChapter = () => {
    if (gameData.size > currentChapterIndex + 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };
  const goPreviousChapter = () => {
    if (currentChapterIndex !== 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };
  useEffect(() => {
    // index starts from 0, so number of chapters = index + 1
    if (readyNextChapter) {
      advanceChapter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyNextChapter, gameData]);

  const { firestore, firebase } = useFirebase();

  useLogs(firestore, firebase, gameState, currentChapterIndex);

  const props = { currentChapter, storyDisplay, toggleStoryDisplay };
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: `url(${jpMtn})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar questions={questions} {...props} />
      <main className="container d-flex flex-column flex-grow-2 justify-content-between">
        <Game questions={questions} checkAnswer={checkAnswer} />
        <Story {...props} advanceChapter={advanceChapter} goPreviousChapter={goPreviousChapter} />
      </main>
    </div>
  );
}

export default App;
