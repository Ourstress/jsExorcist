import { useState, useEffect } from "react";

function useGameData(gameData, gameState) {
  const initialChapterIndex = gameState.overall.currentChapter;
  const [currentChapterIndex, setCurrentChapterIndex] = useState(
    initialChapterIndex
  );

  const getChapterNumber = Array.from(gameData.keys())[currentChapterIndex];
  const [currentChapter, setCurrentChapter] = useState(
    gameData.get(getChapterNumber)
  );
  useEffect(() => {
    const getChapterNumber = Array.from(gameData.keys())[currentChapterIndex];
    setCurrentChapter(gameData.get(getChapterNumber));
  }, [gameData, currentChapterIndex]);
  return [currentChapter, currentChapterIndex, setCurrentChapterIndex];
}
export default useGameData;
