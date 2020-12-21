import { useState, useEffect } from "react";

function useGame(gameState) {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const getChapterNumber = Array.from(gameState.keys())[currentChapterIndex];
  const [currentChapter, setCurrentChapter] = useState(
    gameState.get(getChapterNumber)
  );
  useEffect(() => {
    const getChapterNumber = Array.from(gameState.keys())[currentChapterIndex];
    setCurrentChapter(gameState.get(getChapterNumber));
  }, [gameState, currentChapterIndex]);
  return [currentChapter, currentChapterIndex, setCurrentChapterIndex];
}
export default useGame;
