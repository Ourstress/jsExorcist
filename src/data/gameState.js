//react-markdown line break --> two spaces followed by \n

import { TAGS } from "./constants";

const questions = {
  intro: [
    {
      id: 1,
      title: "What is coding all about?",
      question: `Coding is about giving our computers instructions - eg. build apps and perform tasks like interacting with websites!  \n  \nWe will be writing code in a _ _ _ _ _ _ _ _ _ _ _  language called Javascript.`,
      answer: "programming",
      hint:
        "What is the term used to describe languages like Python & Javascript?",
      tags: TAGS.whatIsCode,
    },
    {
      id: 2,
      title: "Meet console.log!",
      question: `Within our code, we use the console.log function a lot to help us check that our code is working as expected!  \n  \nWhat is displayed by console.log("hello world")?`,
      answer: "hello world",
      hint:
        "console.log displays the value of code between its round brackets! eg. console.log(1+1) displays 2",
      tags: TAGS.consoleLog,
    },
    {
      id: 3,
      title: "What is the console?",
      question: `The [console](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con) lets us interact with our computer.  \n  \nThe Javascript console provides a log function (ie. console.log) that we can use to display the value of Javascript objects that we are interested in!  \n  \nAnother word for console is _ _ _ _ _ _ _ _`,
      answer: "terminal",
      hint: "Read the link supplied in the question!",
      tags: TAGS.consoleLog,
    },
    {
      id: 4,
      title: "Log something to the console!",
      question: `what is the code used to display the message "hi there" to the console?`,
      answer: [
        "console.log('hi there')",
        'console.log("hi there")',
        "console.log(`hi there`)",
      ],
      hint:
        "console.log displays the value of *Javascript objects* between its round brackets!  \neg. console.log(1+1) displays 2",
      tags: TAGS.consoleLog,
    },
  ],
  utilities: [
    {
      id: 1,
      title: "console logging multiple objects",
      question: `we can log the value of multiple JS objects in a single console.log eg. console.log(1+1,'is',2)  \n   \nhow would you log the variables x and y?`,
      answer: ["console.log(x,y)", "console.log(y,x)"],
      hint:
        "Put the JS objects you wish to log within the round brackets of the console.log function - separated by comma",
      tags: TAGS.consoleLog,
    },
  ],

  filler: [
    {
      id: 2,
      title: 2,
      question: "# Hello, *world*!",
      answer: "",
      hint: "a",
    },
    { id: 3, title: 3, question: "", answer: "", hint: "b" },
    { id: 4, title: 4, question: "", answer: "", hint: "c" },
    { id: 5, title: 5, question: "", answer: "", hint: "d" },
    { id: 6, title: 6, question: "", answer: "", hint: "e" },
    { id: 7, title: 7, question: "", answer: "", hint: "f" },
    { id: 8, title: 8, question: "", answer: "", hint: "g" },
    { id: 9, title: 9, question: "", answer: "", hint: "h" },
    { id: 10, title: 10, question: "", answer: "", hint: "i" },
    { id: 11, title: 11, question: "", answer: "", hint: "i" },
    { id: 12, title: 12, question: "", answer: "", hint: "i" },
  ],
};
const introQns = questions["intro"];
const fillerQns = questions["filler"];
const gameData = new Map([
  [
    "chapter 1",
    {
      name: "Intro to Javascript",
      story:
        "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
      questions: [...introQns, ...fillerQns],
    },
  ],
  [
    "chapter 2",
    {
      name: "chapter 2",
      story:
        "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
      questions: [introQns[2]],
    },
  ],
]);
const gameState = {
  overall: {
    currentChapter: 0,
  },
  chapters: {
    "chapter 1": {
      1: { status: "in progress" },
    },
  },
};
export { gameData, gameState };
