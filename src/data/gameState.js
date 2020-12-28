//react-markdown line break --> two spaces followed by \n

import { TAGS } from "./constants";

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
    {
      id: 44,
      title: "memory",
      question: `What has bits and bytes got to do with Javascript?  \n  \nUnder the hood, our JS code gets converted to bytes that are stored in the computer hardware called [memory](https://web.stanford.edu/class/cs101/hardware-1.html).  \n  \nEach byte has its own memory address so the computer knows where different parts of the code can be found.  \n  \nJavascript _ _ _ _ _ _ _ _ _ _ _ _ _ manages memory for us - [refer to this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)`,
      answer: ["automatically"],
      hint: "refer to the link on the last line",
      tags: TAGS.bitBytes,
    },
  ],
  datatypes: [
    {
      id: 51,
      title: "The need for different data types",
      question: `Think about the data we would want our code to work with... such as numbers or text.  \n  \nEg. we want to be able to do math with numbers like addition / multiplication whereas for text, we might want to convert all the letters to uppercase or lowercase.  \n  \nIn Javascript, every data has to have a data type - like \`Number\` or \`String\`.  \n  \nDifferent data types support different operations.  \n  \nWhat is the data type of 123.02?`,
      answer: ["Number"],
      hint:
        "google JS data types - be careful of capitalisation for the answer!",
      tags: TAGS.datatypes,
    },
    {
      id: 52,
      title: "The 6 JS data types",
      question: `Learning about the [6 data types](http://cs.millersville.edu/~trogers/csci121/2016_fall/lectures/lecture11_notes.html) in Javascript is an essential starting point.  \n  \nThey are \`Number\`, \`String\`, \`Boolean\`, \`Object\`, \`Undefined\` and \`Null\`.\n  \nA good acronym to remember them by could be NO SNUB\n  \nWhich data type does Javascript array belong to?`,
      answer: ["Object"],
      hint: "reference the hyperlink in the question",
      tags: TAGS.datatypes,
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
};
const introQns = [
  ...questions["aboutJs"],
  ...questions["whatIsCoding"],
  ...questions["consoleLog"],
];
const bitByteQns = questions["bitBytes"];
const dataTypeQns = questions["datatypes"];

const chapterTitles = {
  chapter1: "Intro to Javascript",
  chapter2: "Bits, bytes and memory",
  chapter3: "Javascript data types",
};

const gameData = new Map([
  [
    "chapter 1",
    {
      name: chapterTitles.chapter1,
      story:
        "Welcome apprentice exorcist!  \n  \nWe will start off by learning about what Javascript does and get familiar with the console.log function which we will be using frequently.",
      questions: introQns,
    },
  ],
  [
    "chapter 2",
    {
      name: chapterTitles.chapter2,
      story:
        "Next, we will learn more about the inner working of computers such as binary numbers, bits, bytes and memory that Javascript runs on",
      questions: bitByteQns,
    },
  ],
  [
    "chapter 3",
    {
      name: chapterTitles.chapter3,
      story: "Mastery of Javascript starts with a grasp of the data types!",
      questions: dataTypeQns,
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
