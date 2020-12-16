function SpriteModal(props) {
  const { modalId, modalContent } = props;
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
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">{modalContent}</div>
        </div>
      </div>
    </div>
  );
}

export default SpriteModal;
