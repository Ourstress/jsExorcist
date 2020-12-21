import Sprite from "./sprite";
import SpriteModal from "./spriteModal";
import { useState, useEffect } from "react";
import { useTransition } from "react-spring";

function Game(props) {
  useEffect(() => {
    // eslint-disable-next-line
    eval(
      `
      var popoverTriggerList = Array.from(document.querySelectorAll('.btn.btn-outline-primary.popoverclass'));
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {return new bootstrap.Popover(popoverTriggerEl)})
      `
    );
  }, []);
  const { questions, checkAnswer } = props;
  const [selectedQn, setSelectedQn] = useState("");
  const modalId = "spriteModal";

  const questionsToRender = questions
    .filter((question) => question.status !== "found correct answer!")
    .slice(0, 10);

  const transitions = useTransition(questionsToRender, (qn) => qn.title, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 3000,
    },
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
