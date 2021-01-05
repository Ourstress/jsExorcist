import { useMemo, useState, useEffect } from "react";
import ChapterModal from "../chaptersModal";

function Navbar(props) {
  const { currentChapter, storyDisplay, toggleStoryDisplay, questions } = props;
  const [exorcisedGhosts, setExorcisedGhosts] = useState(0);

  const chapterExorcisedGhosts = useMemo(() => {
    return questions.filter((question) => question.status === "found correct answer!").length;
  }, [questions]);

  useEffect(() => {
    setExorcisedGhosts(chapterExorcisedGhosts);
  }, [chapterExorcisedGhosts]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">JS Exorcist</span>
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
              className="btn text-start"
              onClick={() => toggleStoryDisplay(!storyDisplay)}
            >
              {`Progress: ${currentChapter.name}`}
            </button>
            <span style={{ padding: "0.375rem 0.75rem" }}>
              {`Exorcised: ${exorcisedGhosts} 👻`}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
