import Sprite from "./sprite";

function Game() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {questions.map((qn) => (
        <Sprite key={qn} dataBsToggle="modal" dataBsTarget="#spriteModal" />
      ))}
      <div
        className="modal fade"
        id="spriteModal"
        tabIndex="-1"
        aria-hidden="true"
        aria-label="modal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
