import { useState } from "react";
import { PauseFill, PlayFill, Check } from "react-bootstrap-icons";

function SpriteModal(props) {
  const { modalId, modalContent } = props;
  const [answer, setAnswer] = useState("");
  const checkAnswer = () =>
    window.alert(
      modalContent.answer === answer ? "answer correct" : "wrong answer"
    );

  const statusIcon = () => {
    let component = null;
    switch (modalContent.status) {
      case "found correct answer!":
        component = <Check style={{ fontSize: "1.5rem" }} />;
        break;
      case "in progress!":
        component = <PlayFill style={{ fontSize: "1.5rem" }} />;
        break;
      default:
        component = <PauseFill style={{ fontSize: "1.5rem" }} />;
    }
    return component;
  };
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-hidden="true"
      aria-label="modal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalContent.title}</h5>
            {statusIcon()}
          </div>
          <div className="modal-body">
            {modalContent.question}
            <hr />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Answer"
                aria-describedby={modalContent.title}
                placeholder="answer here!"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                id={modalContent.title}
                onClick={checkAnswer}
              >
                Submit
              </button>
            </div>
          </div>
          <div
            className="modal-footer"
            style={{ justifyContent: "space-between" }}
          >
            {/* eslint-disable-next-line */}
            <a
              tabIndex="0"
              className="btn btn-outline-primary popoverclass"
              role="button"
              data-bs-toggle="popover"
              data-bs-trigger="focus"
              title="Dismissible popover"
              data-bs-content={modalContent.hint}
            >
              Hint
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpriteModal;
