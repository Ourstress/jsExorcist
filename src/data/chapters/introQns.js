import { TAGS, QUESTIONTYPE } from "../constants";

const questions = {
  whatIsCoding: [
    {
      id: 1,
      title: "What is coding all about?",
      question: `Coding is about giving our computers instructions - eg. build apps and interacting with websites!  \n  \nWe will be writing code in a _ _ _ _ _ _ _ _ _ _ _  language called Javascript.`,
      answer: ["programming"],
      hint: "What is the term used to describe languages like Python & Javascript?",
      tags: [TAGS.whatIsCode],
    },
  ],
  aboutJs: [
    {
      id: 21,
      title: "What is Javascript?",
      question: `You might have heard of programming languages like Java, Python, C etc, so what is [special about Javascript](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#the-web-rules-everything-about-js)?  \n  \nJavascript is the language of the _ _ _! [For more info about Javascript's name](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#whats-with-that-name)`,
      answer: ["web"],
      hint: "Javascript is powering your browser whether on desktop, mobile etc",
      tags: [TAGS.aboutJs],
    },
  ],
  consoleLog: [
    {
      id: 31,
      title: "Meet console.log!",
      question: `The console.log function helps us check whether our code is working as expected!  \n  \nAs JS learners, the first line of code we would usually write is to display the message *hello world*.  \n  \nDo remember the console.log function because it will be used throughout your coding journey! 
  
      console.log("hello world")
  
  What is displayed by the line of code above?`,
      answer: ["hello world"],
      hint:
        "console.log displays the value of code between its round brackets! eg. console.log(1+1) displays 2",
      tags: [TAGS.consoleLog],
    },
    {
      id: 33,
      title: "What is the console?",
      question: `The [console](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con) lets us interact with our computer.  \n  \nIt provides a log function (ie. console.log) that can display Javascript values that we are interested in!  \n  \nAnother word for console is _ _ _ _ _ _ _ _`,
      answer: ["terminal"],
      hint: "Read the link supplied in the question!",
      tags: [TAGS.consoleLog],
    },
    {
      id: 34,
      title: "Log something to the console!",
      question: `What is the code used to display the message "hi there" to the console?`,
      answer: [
        "nestedValue,expression.callee.object.name,console",
        "nestedValue,expression.callee.property.name,log",
        "arrayObjKeyValue,expression.arguments,hi there",
      ],
      hint:
        "console.log displays the value of *Javascript objects* between its round brackets!  \neg. console.log(1+1) displays 2",
      tags: [TAGS.consoleLog],
      type: QUESTIONTYPE.code,
    },
  ],
};
const introQns = [
  ...questions["aboutJs"],
  ...questions["whatIsCoding"],
  ...questions["consoleLog"],
];

export default introQns;
