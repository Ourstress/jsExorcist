import Sprite from "./sprite";
import SpriteModal from "./spriteModal";
import { useState } from "react";

function Game() {
  const questions = [
    {
      title: 'What is displayed by `print("hello world")`?',
      answer: "hello world",
    },
    { title: 2, answer: "" },
    { title: 3, answer: "" },
    { title: 4, answer: "" },
    { title: 5, answer: "" },
    { title: 6, answer: "" },
    { title: 7, answer: "" },
    { title: 8, answer: "" },
    { title: 9, answer: "" },
    { title: 10, answer: "" },
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
      <SpriteModal modalId={modalId} modalContent={selectedQn.title} />
    </div>
  );
}

export default Game;
