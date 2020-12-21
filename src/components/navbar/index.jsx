import ChapterModal from "../chaptersModal";

function Navbar(props) {
  const { currentChapter, storyDisplay, toggleStoryDisplay } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">JS excorcist</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ChapterModal currentChapter={currentChapter} />
            <button
              type="button"
              className="btn"
              onClick={() => toggleStoryDisplay(!storyDisplay)}
            >
              Progress:{currentChapter.name}
            </button>
            <span style={{ padding: "0.375rem 0.75rem" }}>
              Exorcised:
              {
                currentChapter.questions.filter(
                  (question) => question.status === "found correct answer!"
                ).length
              }
              ghost
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
