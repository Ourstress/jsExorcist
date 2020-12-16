import Sprite from "./sprite";
import SpriteModal from "./spriteModal";

function Game() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const modalId = "spriteModal";
  return (
    <div>
      {questions.map((qn) => (
        <Sprite key={qn} dataBsToggle="modal" dataBsTarget={`#${modalId}`} />
      ))}
      <SpriteModal modalId={modalId} />
    </div>
  );
}

export default Game;
