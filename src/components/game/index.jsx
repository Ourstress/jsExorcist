import Sprite from "./sprite";
import SpriteModal from "./spriteModal";
import { useState } from "react";

function Game() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedQn, setSelectedQn] = useState("");
  const modalId = "spriteModal";
  return (
    <div>
      {questions.map((qn) => (
        <Sprite
          key={qn}
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
