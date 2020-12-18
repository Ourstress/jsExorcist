import Sprite from "./sprite";
import SpriteModal from "./spriteModal";
import { useState, useEffect } from "react";
import { useTransition } from "react-spring";

function Game() {
  useEffect(() => {
    // eslint-disable-next-line
    eval(
      `
      var popoverTriggerList = Array.from(document.querySelectorAll('.btn.btn-outline-primary.popoverclass'));
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {return new bootstrap.Popover(popoverTriggerEl)})
      `
    );
  }, []);

  const [questions, updateQuestions] = useState([
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
  ]);
  const [selectedQn, setSelectedQn] = useState("");
  const modalId = "spriteModal";
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
  const questionsToRender = questions
    .filter((question) => question.status !== "found correct answer!")
    .slice(0, 10);

  const transitions = useTransition(questionsToRender, (qn) => qn.title, {
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <Sprite
          key={item.title}
          dataBsToggle="modal"
          dataBsTarget={`#${modalId}`}
          clickFn={() => setSelectedQn(item)}
          springProps={props}
        />
      ))}

      <SpriteModal
        modalId={modalId}
        modalContent={selectedQn}
        checkAnswer={checkAnswer}
      />
    </div>
  );
}

export default Game;
