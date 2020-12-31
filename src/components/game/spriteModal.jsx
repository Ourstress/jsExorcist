import { PauseFill, PlayFill, Check } from "react-bootstrap-icons";
import { QUESTIONSTATUS } from "../../data/constants";
import ReactMarkdown from "react-markdown";
import Question from "./question";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ value }) => {
  return (
    <SyntaxHighlighter showLineNumbers language="javascript" styles={docco}>
      {value}
    </SyntaxHighlighter>
  );
};
function SpriteModal(props) {
  const { modalId, modalContent, checkAnswer } = props;

  const statusIcon = () => {
    let component = null;
    switch (modalContent.status) {
      case QUESTIONSTATUS.correct:
        component = <Check style={{ fontSize: "1.5rem" }} />;
        break;
      case QUESTIONSTATUS.trying:
        component = <PlayFill style={{ fontSize: "1.5rem" }} />;
        break;
      default:
        component = <PauseFill style={{ fontSize: "1.5rem" }} />;
    }
    return component;
  };
  const question = (
    <ReactMarkdown
      source={modalContent.question}
      renderers={{ code: ({ value }) => <CodeBlock value={value} /> }}
    />
  );

  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true" aria-label="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalContent.title}</h5>
            {statusIcon()}
          </div>
          <div className="modal-body">
            {question}
            <hr />
            <Question content={modalContent} checkAnswer={checkAnswer} />
          </div>
          <div className="modal-footer" style={{ justifyContent: "space-between" }}>
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
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpriteModal;
