import Sprite from "./sprite";
import SpriteModal from "./spriteModal";
import { useState } from "react";

function Game() {
  const questions = [
    {
      title: "Meet print!",
      question: 'What is displayed by `print("hello world")`?',
      answer: "hello world",
      hint:
        "The *print* function tells the computer to display the value of a python object given to it",
    },
    { title: 2, question: "", answer: "", hint: "" },
    { title: 3, question: "", answer: "", hint: "" },
    { title: 4, question: "", answer: "", hint: "" },
    { title: 5, question: "", answer: "", hint: "" },
    { title: 6, question: "", answer: "", hint: "" },
    { title: 7, question: "", answer: "", hint: "" },
    { title: 8, question: "", answer: "", hint: "" },
    { title: 9, question: "", answer: "", hint: "" },
    { title: 10, question: "", answer: "", hint: "" },
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
