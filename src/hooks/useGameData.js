import { useState, useEffect } from "react";

function useGameData(gameData, gameState) {
  const initialChapterIndex = gameState.overall.currentChapter;
  const [currentChapterIndex, setCurrentChapterIndex] = useState(
    initialChapterIndex
  );

  const gameDataKeys = Array.from(gameData.keys());
  const chapterNumber = gameDataKeys[currentChapterIndex];
  const [currentChapter, setCurrentChapter] = useState(
    gameData.get(chapterNumber)
  );
  useEffect(() => {
    const chapterNumber = gameDataKeys[currentChapterIndex];
    setCurrentChapter(gameData.get(chapterNumber));
  }, [gameData, gameDataKeys, currentChapterIndex]);
  return [currentChapter, currentChapterIndex, setCurrentChapterIndex];
}
export default useGameData;
