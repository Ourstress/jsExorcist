import Chapter from "./chapter";

function ChaptersModal(props) {
  const { currentChapter } = props;
  const data = currentChapter ? currentChapter.questions : [];
  return (
    <section>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#chaptersModal">
        Notes
      </button>

      <div
        className="modal fade"
        id="chaptersModal"
        tabIndex="-1"
        aria-labelledby="chaptersModalLabel"
        aria-hidden="true"
        aria-label="modal"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="chaptersModalLabel">
                Notes
              </h5>
            </div>
            <div className="modal-body">
              <Chapter data={data} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChaptersModal;
