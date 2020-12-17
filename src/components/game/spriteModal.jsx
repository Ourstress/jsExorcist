import { useEffect } from "react";

function SpriteModal(props) {
  const { modalId, modalContent } = props;
  useEffect(() => {
    // eslint-disable-next-line
    eval(
      "var popover = new bootstrap.Popover(document.querySelector('.btn.btn-primary.popoverclass'), {trigger: 'focus'})"
    );
  }, []);
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
          <div className="modal-body">{modalContent.question}</div>
          <div
            className="modal-footer"
            style={{ justifyContent: "space-between" }}
          >
            {/* eslint-disable-next-line */}
            <a
              tabIndex="0"
              className="btn btn-primary popoverclass"
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
