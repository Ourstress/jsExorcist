import { useState, useMemo, useEffect } from "react";
import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";

function App() {
  const gameState = new Map([
    [
      "chapter 1",
      {
        name: "chapter 1",
        story:
          "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
        questions: [
          {
            title: "Meet print!",
            question: 'What is displayed by `print("hello world")`?',
            answer: "hello world",
            hint:
              "The *print* function tells the computer to display the value of a python object given to it",
            status: "pending attempts",
          },
          {
            title: 2,
            question: "",
            answer: "",
            hint: "a",
            status: "found correct answer!",
          },
          {
            title: 3,
            question: "",
            answer: "",
            hint: "b",
            status: "in progress!",
          },
          {
            title: 4,
            question: "",
            answer: "",
            hint: "c",
            status: "pending attempts",
          },
          {
            title: 5,
            question: "",
            answer: "",
            hint: "d",
            status: "pending attempts",
          },
          {
            title: 6,
            question: "",
            answer: "",
            hint: "e",
            status: "pending attempts",
          },
          {
            title: 7,
            question: "",
            answer: "",
            hint: "f",
            status: "pending attempts",
          },
          {
            title: 8,
            question: "",
            answer: "",
            hint: "g",
            status: "pending attempts",
          },
          {
            title: 9,
            question: "",
            answer: "",
            hint: "h",
            status: "pending attempts",
          },
          {
            title: 10,
            question: "",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
          {
            title: 11,
            question: "",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
          {
            title: 12,
            question: "",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
        ],
      },
    ],
    [
      "chapter 2",
      {
        name: "chapter 2",
        story:
          "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
        questions: [
          {
            title: 1,
            question: "hello",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
        ],
      },
    ],
  ]);
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
      ? (questionToUpdate.status = "found correct answer!")
      : (questionToUpdate.status = "in progress!");

    const copyOfQuestions = [...questions];
    copyOfQuestions.splice(questionToUpdateIndex, 1, questionToUpdate);
    updateQuestions(copyOfQuestions);
  };

  const readyNextChapter = useMemo(() => {
    return (
      questions.filter(
        (question) => question.status !== "found correct answer!"
      ).length === 0
    );
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
      style={{
        backgroundImage: `url(${jpMtn})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar
        currentChapter={currentChapter}
        storyDisplay={storyDisplay}
        toggleStoryDisplay={toggleStoryDisplay}
        questions={questions}
      />
      <main
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 2,
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
