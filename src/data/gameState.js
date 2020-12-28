//react-markdown line break --> two spaces followed by \n

import { TAGS } from "./constants";

const chapterTitles = {
  chapter1: "Intro to Javascript",
};
const questions = {
  whatIsCoding: [
    {
      id: 1,
      title: "What is coding all about?",
      question: `Coding is about giving our computers instructions - eg. build apps and perform tasks like interacting with websites!  \n  \nWe will be writing code in a _ _ _ _ _ _ _ _ _ _ _  language called Javascript.`,
      answer: ["programming"],
      hint:
        "What is the term used to describe languages like Python & Javascript?",
      tags: TAGS.whatIsCode,
    },
  ],
  aboutJs: [
    {
      id: 21,
      title: "What is Javascript?",
      question: `You might have heard of programming languages like Java, Python, C etc, so what is [special about Javascript](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#the-web-rules-everything-about-js)?  \n  \nJavascript is the language of the _ _ _! [For more info about Javascript's name](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#whats-with-that-name)`,
      answer: ["web"],
      hint:
        "Javascript is powering your browser whether on desktop, mobile etc",
      tags: TAGS.aboutJs,
    },
  ],
  consoleLog: [
    {
      id: 31,
      title: "Meet console.log!",
      question: `Within our code, we use the console.log function a lot to help us check that our code is working as expected!  \n  \nWhat is displayed by console.log("hello world")?`,
      answer: ["hello world"],
      hint:
        "console.log displays the value of code between its round brackets! eg. console.log(1+1) displays 2",
      tags: TAGS.consoleLog,
    },
    {
      id: 33,
      title: "What is the console?",
      question: `The [console](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con) lets us interact with our computer.  \n  \nThe Javascript console provides a log function (ie. console.log) that we can use to display the value of Javascript objects that we are interested in!  \n  \nAnother word for console is _ _ _ _ _ _ _ _`,
      answer: ["terminal"],
      hint: "Read the link supplied in the question!",
      tags: TAGS.consoleLog,
    },
    {
      id: 34,
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
  bitBytes: [
    {
      id: 41,
      title: "The computer's alphabet",
      question: `While the english language has 26 letters in its alphabet, the alphabet for computers is only two letters - 0 and 1  \n  \nAnother term for 0 and 1 is [binary numbers](https://en.wikipedia.org/wiki/Binary_number) which you would come across frequently too!  \n  \nWhich of the following would be recognised by the computer? - abc, 011, one1`,
      answer: ["011"],
      hint: "The computer only recognises binary numbers",
      tags: TAGS.bitBytes,
    },
    {
      id: 42,
      title: "Data and bits",
      question: `The computer makes use of binary numbers 0 and 1 to do its job.  \n  \nIt can understand sequences of binary numbers like \`011\`, \`1001\` the way we understand \`apple\` or \`boy\` eg. an instruction to do addition looks like \`1000110010100000\`  \n  \nEach "letter" or digit in \`011\`, \`1001\` etc is called a bit.  \n  \n1000 is comprised of how many bits?`,
      answer: ["4", "four"],
      hint: "Each bit of information is either 0 or 1",
      tags: TAGS.bitBytes,
    },
    {
      id: 43,
      title: "bytes",
      question: `To store more information, we need a sequence of bits to represent it.  \n  \nA byte is made up of 8 bits. And with 8 bits, a byte let us represent ASCII characters like small and capital english alphabet characters!  \n  \n[More info](https://web.stanford.edu/class/cs101/bits-bytes.html)  \n  \nWhat is the ASCII representation for the capital letter A?`,
      answer: ["65", "1000001"],
      hint: "Look up the ASCII table online",
      tags: TAGS.bitBytes,
    },
  ],
  utilities: [
    {
      id: 111,
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
      id: 2211,
      title: 2,
      question: "# Hello, *world*!",
      answer: "",
      hint: "a",
    },
    { id: 2311, title: 3, question: "", answer: "", hint: "b" },
    { id: 2411, title: 4, question: "", answer: "", hint: "c" },
    { id: 2511, title: 5, question: "", answer: "", hint: "d" },
    { id: 2611, title: 6, question: "", answer: "", hint: "e" },
    { id: 2711, title: 7, question: "", answer: "", hint: "f" },
    { id: 2811, title: 8, question: "", answer: "", hint: "g" },
    { id: 2911, title: 9, question: "", answer: "", hint: "h" },
    { id: 3011, title: 10, question: "", answer: "", hint: "i" },
    { id: 3111, title: 11, question: "", answer: "", hint: "i" },
    { id: 3211, title: 12, question: "", answer: "", hint: "i" },
  ],
};
const introQns = [
  ...questions["consoleLog"],
  ...questions["aboutJs"],
  ...questions["whatIsCoding"],
];
const fillerQns = questions["filler"];
const bitByteQns = questions["bitBytes"];
const gameData = new Map([
  [
    "chapter 1",
    {
      name: chapterTitles.chapter1,
      story:
        "Welcome apprentice exorcist!  \n  \nWe will start off by learning about what Javascript does and get familiar with the console.log function which we will be using frequently.",
      questions: [...bitByteQns], //[...introQns],
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
  [
    "chapter 3",
    {
      name: "chapter 3",
      story: "Welcome apprentice exorcist to Chapter 3!",
      questions: [...fillerQns],
    },
  ],
]);
const gameState = {
  overall: {
    currentChapter: 0,
  },
  chapters: {
    [chapterTitles.chapter1]: {
      1: { status: "in progress" },
    },
  },
};
export { gameData, gameState };
