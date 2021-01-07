import { useState, useEffect, useRef } from "react";
import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";
import { gameData, gameState as defaultGameState } from "./data/gameState";
import useGameData from "./hooks/useGameData.js";
import useGameState from "./hooks/useGameState";
import firebase from "firebase/app";
import "firebase/firestore";
import publicIp from "public-ip";
import crypto from "crypto-js";

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

  const dbRef = useRef(null);
  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    dbRef.current = firebase.firestore();
  }, []);

  const sessionKey = useRef(crypto.lib.WordArray.random(16).words.join(""));
  useEffect(() => {
    const inProd = process.env.NODE_ENV !== "development";
    let ip;
    (async () => {
      ip = await publicIp.v4();
      inProd &&
        dbRef.current
          .collection("logs")
          .doc(sessionKey.current)
          .set({
            ...gameState,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            ip: ip,
            device: window.navigator.userAgent,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          });
    })();
    // eslint-disable-next-line
  }, [currentChapterIndex]);

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
