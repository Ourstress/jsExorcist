import { useEffect, useState } from "react";

function SpriteModal(props) {
  const { modalId, modalContent } = props;
  useEffect(() => {
    // eslint-disable-next-line
    eval(
      `
      var popoverTriggerList = Array.from(document.querySelectorAll('.btn.btn-outline-primary.popoverclass'));
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {return new bootstrap.Popover(popoverTriggerEl)})
      `
    );
  }, []);
  const [answer, setAnswer] = useState("answer");
  const checkAnswer = () =>
    window.alert(
      modalContent.answer.includes(answer) ? "answer correct" : "wrong answer"
    );
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
          </div>
          <div className="modal-body">
            {modalContent.question}
            <hr />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Answer"
                aria-label="Answer"
                aria-describedby={modalContent.title}
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
