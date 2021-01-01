import { useState } from "react";
import { UTILITYFNS } from "../../../data/constants";

const acorn = require("acorn");

function CodingQn(props) {
  const { content, checkAnswer } = props;
  const [answer, setAnswer] = useState("");

  const evaluateAnswer = () => {
    let parsedAnswer;
    let answerCorrect;
    try {
      parsedAnswer = acorn.parse(answer, { ecmaVersion: 2020 });
      const [checkFunction, parameter, checkValue] = content.answer[0].split(",");
      answerCorrect = parsedAnswer.body.some((item) => {
        return UTILITYFNS[checkFunction](item, parameter) === checkValue;
      });
    } catch (e) {
      parsedAnswer = e.message;
      answerCorrect = false;
    }

    checkAnswer(content, answerCorrect);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Answer"
        aria-describedby={content.title}
        placeholder="Type in your code"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="btn btn-primary" type="button" id={content.title} onClick={evaluateAnswer}>
        Submit
      </button>
    </div>
  );
}

export default CodingQn;
