import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ value }) => {
  return (
    <SyntaxHighlighter showLineNumbers language="javascript" styles={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

function Chapter(props) {
  const { data } = props;
  return (
    <section>
      <div className="accordion" id="chapterAccordion" aria-label="accordion">
        {data.map((dataItem, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={"heading" + index}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="false"
                aria-controls={"collapse" + index}
              >
                {dataItem.title}
              </button>
            </h2>
            <div
              id={"collapse" + index}
              className="accordion-collapse collapse"
              aria-labelledby={"heading" + index}
              data-bs-parent="#chapterAccordion"
            >
              <div className="accordion-body">
                <ReactMarkdown
                  source={dataItem.question}
                  renderers={{ code: ({ value }) => <CodeBlock value={value} /> }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chapter;
