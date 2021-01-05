//react-markdown line break --> two spaces followed by \n
// react-markdown code block - leave blank space b4 and after and indent with four spaces

import { TAGS } from "./constants";
import variableNamePic from "../assets/variableKeywordName.png";
import introQns from "./chapters/introQns";
import bitByteMemoryQns from "./chapters/bitByteMemory";
import datatypeQns from "./chapters/datatypes";

const questions = {
  operatorsAndKeywords: [
    {
      id: 71,
      title: "Javascript keywords",
      question: `Coding in Javascript requires us to recognise and use special keywords.  \n  \nIt is important to recognise these keywords because each keyword has a unique purpose.  \n  \nThe computer would be on the lookout for these keywords and flag an error if they are not used correctly too.  \n  \nHere is [a list of keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)  \n  \nWhich of the following isn't a keyword?\n\`if\`,\`console\`,\`in\`,\`super\``,
      answer: ["console"],
      hint: "The list of keywords in the question is sorted in alphabetical order",
      tags: [TAGS.keyword],
    },
  ],
  variables: [
    {
      id: 92,
      title: "Variables are just names",
      question: `Variables are ***names*** for javascript values.  \n  \nImagine how difficult life would be if one day we humans suddenly stop using names...  \n  \nThe idea of variables came from maths - where we can create variables like x, y or xyz to represent mathematical values  \n  \nSimilarly, we can choose variable names as we like except [putting digits at the start or using restricted keywords](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#An_aside_on_variable_naming_rules)  \n  \nWhich of these variable names are invalid?\n\`iffy\`,\`IFELSE\`,\`if\`,\`ifIletYou\`,\`99ifs\``,
      answer: ["99ifs,if", "99ifs, if", "if,99ifs", "if, 99ifs"],
      hint:
        "watch out for keywords and the usage of digits at the start. Your answer should be separated by comma",
      tags: [TAGS.variables],
    },
    {
      id: 93,
      title: "Declaring a variable - keyword",
      question: `We start using variables by *declaring* them to let the computer know that they exist.  \n  \nHere we can choose to use one of three keywords - \`const\`, \`let\` or \`var\` to declare a variable.  \n  \neg.  \n\`const myVariable = 'hi there'\`  \n  \n![](${variableNamePic})  \n  \nWhen the computer sees \`const\`, \`let\` or \`var\`, it knows the next word is the new variable name.  \n  \ncan you declare a variable called greeting to be "hello!"?`,
      answer: ['var greeting = "hello"', 'let greeting = "hello"', 'const greeting = "hello"'],
      hint:
        'This question tests your use of variable declaration keyword and your answer should look like ??? greeting = "hello"',
      tags: [TAGS.variables, TAGS.keyword],
    },
    {
      id: 94,
      title: "Assignment",
      question: `Variables are just names for Javascript values - and we link these values with their names (aka variables) through the humble \`=\` operator.  \n  \nThe \`=\` operator, also called the assignment operator, sits between the variable on its left and the value to be assigned to that variable on the right  \n  \nWhat if we have a variable on the left and another variable on the right?  \n\`let myName='hello'\`  \n\`let hisName=myName\`  \n  \nIt can be confusing that on the left is the variable which would be the name of the *value* on the right. So even if the right side is a variable, we actually want to assign its value to the left side variable  \n  \nWhat is the value of \`hisname\`?`,
      answer: [`'hello'`, `"hello"`],
      hint:
        "Note that the variable myName is just a name for the string value 'hello'. Don't forget the quotes!",
      tags: [TAGS.variables],
    },
    {
      id: 95,
      title: "Differences between const, let and var",
      question: `\`const\` is short for constant and [should be preferred over let and var](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75) if we don't want the variable declared to be re-assigned  \n  \nif we have\n\`const greeting = 'hello'\`,we cannot *re-assign* greeting again  \n  \nIf we are new to learning JS, it is stronly recommended to use \`let\` over \`var\` since \`let\` can directly replace \`var\` and improves on its shortcomings  \n  \nWhich variable declaration keyword is recommended if we want the variable to be re-assigned to a new value?`,
      answer: ["let"],
      hint: "const doesn't allow variable declared to be re-assigned",
      tags: [TAGS.variables, TAGS.keyword],
    },
  ],
  basicObjectsArraysFunctions: [
    {
      id: 111,
      title: "Object key-value pairs are its properties",
      question: `Objects store key-value pairs. Each key-value pair is a ***property*** of the object  \n  \nAnother term for key is *property name*.  \n  \nThe property name is used to retrieve its value. Eg. The colour property in {colour:"red"} is "red"  \n  \nWhat is the species property in {colour:'white',species:'maltese'}?`,
      answer: ["maltese"],
      hint: "Similar example: the colour property in {colour:'red'} is 'red'",
      tags: [TAGS.datatypes, TAGS.objects],
    },
    {
      id: 112,
      title: "Object property names",
      question: `Objects store key-value pairs which are its properties.  \n  \nProperty names can be surrounded with quotes or without quotes eg. \`{noQuote:"red","with quotes":"blue"}\`  \n  \nNotes:multi-word property names have to be quoted  \n  \nWhich property name is incorrect in \`{dog colour:"white","species":"maltese",size:"small"}\``,
      answer: ["dog colour"],
      hint: "multi-word property names have to be quoted",
      tags: [TAGS.datatypes, TAGS.objects],
    },
  ],
  utilities: [
    {
      id: 1111,
      title: "console logging multiple values",
      question: `we can log the value of multiple JS values in a single console.log eg. console.log(1+1,'is',2)  \n   \nhow would you log the variables x and y?`,
      answer: ["console.log(x,y)", "console.log(y,x)"],
      hint:
        "Put the JS objects you wish to log within the round brackets of the console.log function - separated by comma",
      tags: TAGS.consoleLog,
    },
  ],
  // Objects: dynamic object names using [], unassigned properties are undefined - big source of errors!
  // variables: local variables, why use let over var
};

const operatorsAndKeywordsQns = questions["operatorsAndKeywords"];
const variableQns = questions["variables"];

const basicObjectsArraysFunctionQns = questions["basicObjectsArraysFunctions"];
const chapterTitles = {
  chapter1: "Intro to Javascript",
  chapter2: "Bits, bytes and memory",
  chapter3: "Javascript data types",
  chapter4: "operators and keywords",
  chapter5: "variables",
  chapter6: "Intro to objects, arrays and functions",
};

const chapter1 = [
  "chapter 1",
  {
    name: chapterTitles.chapter1,
    story:
      "Welcome apprentice exorcist!  \n  \nWe will start off by learning about what Javascript does and get familiar with the console.log function which we will be using frequently.",
    questions: introQns,
  },
];

const chapter2 = [
  "chapter 2",
  {
    name: chapterTitles.chapter2,
    story:
      "Next, we will learn more about the inner working of computers such as binary numbers, bits, bytes and memory that Javascript runs on",
    questions: bitByteMemoryQns,
  },
];
const chapter3 = [
  "chapter 3",
  {
    name: chapterTitles.chapter3,
    story: "Mastery of Javascript starts with recognising data types!",
    questions: datatypeQns,
  },
];
const chapter4 = [
  "chapter 4",
  {
    name: chapterTitles.chapter4,
    story: "We will check out Javascript keywords and operators!",
    questions: operatorsAndKeywordsQns,
  },
];
const chapter5 = [
  "chapter 5",
  {
    name: chapterTitles.chapter5,
    story: "Next, we will look at variables which are incredibly useful!",
    questions: variableQns,
  },
];
const chapter6 = [
  "chapter 6",
  {
    name: chapterTitles.chapter6,
    story: "Now an introduction to the harder data types - objects, arrays and functions!",
    questions: basicObjectsArraysFunctionQns,
  },
];
const gameData = new Map([chapter1, chapter2, chapter3, chapter4, chapter5, chapter6]);

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
