import Sprite from "./sprite";

function Game() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container my-3">
      <div style={{ height: "60vh" }}>
        {questions.map((qn) => (
          <Sprite key={qn} />
        ))}
      </div>
    </div>
  );
}

export default Game;
