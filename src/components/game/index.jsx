import Sprite from "./sprite";
import SpriteModal from "./spriteModal";
import { useState, useEffect } from "react";

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

  const questions = [
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
  ];
  const [selectedQn, setSelectedQn] = useState("");
  const modalId = "spriteModal";
  return (
    <div>
      {questions.map((qn) => (
        <Sprite
          key={qn.title}
          dataBsToggle="modal"
          dataBsTarget={`#${modalId}`}
          clickFn={() => setSelectedQn(qn)}
        />
      ))}
      <SpriteModal modalId={modalId} modalContent={selectedQn} />
    </div>
  );
}

export default Game;
