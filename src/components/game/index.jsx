import Sprite from "./sprite";

function Game() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {questions.map((qn) => (
        <Sprite key={qn} />
      ))}
    </div>
  );
}

export default Game;
