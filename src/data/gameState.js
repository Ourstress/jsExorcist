//react-markdown line break --> two spaces followed by \n
// react-markdown code block - leave blank space b4 and after and indent with four spaces

import { TAGS, QUESTIONTYPE } from "./constants";
import variableNamePic from "../assets/variableKeywordName.png";

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
      question: `The console.log function helps us check whether our code is working as expected!  \n  \n

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
      question: `***The [console](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con)*** lets us interact with our computer.  \n  \nIt provides a log function (ie. console.log) that can display Javascript values that we are interested in!  \n  \nAnother word for console is _ _ _ _ _ _ _ _`,
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
  bitBytes: [
    {
      id: 41,
      title: "The computer's alphabet",
      question: `While the english language has 26 letters in its alphabet, the alphabet for computers is only two letters - 0 and 1  \n  \nAnother term for 0 and 1 is [binary numbers](https://en.wikipedia.org/wiki/Binary_number) which you would come across frequently too!  \n  \nWhich of the following would be recognised by the computer? - abc, 011, one1`,
      answer: ["011"],
      hint: "The computer only recognises binary numbers",
      tags: [TAGS.bitBytes],
    },
    {
      id: 42,
      title: "Data and bits",
      question: `The computer makes use of binary numbers 0 and 1 to do its job.  \n  \nIt can understand sequences of binary numbers like \`011\`, \`1001\` the way we understand \`apple\` or \`boy\` eg. an instruction to do addition looks like \`1000110010100000\`  \n  \nEach "letter" or digit in \`011\`, \`1001\` etc is called a bit.  \n  \n1000 is comprised of how many bits?`,
      answer: ["4", "four"],
      hint: "Each bit of information is either 0 or 1",
      tags: [TAGS.bitBytes],
    },
    {
      id: 43,
      title: "bytes",
      question: `To store more information, we need a sequence of bits to represent it.  \n  \nA byte is made up of 8 bits. And with 8 bits, a byte let us represent ASCII characters like small and capital english alphabet characters!  \n  \n[More info](https://web.stanford.edu/class/cs101/bits-bytes.html)  \n  \nWhat is the ASCII representation for the capital letter A?`,
      answer: ["65", "1000001"],
      hint: "Look up the ASCII table online",
      tags: [TAGS.bitBytes],
    },
    {
      id: 44,
      title: "memory",
      question: `What has bits and bytes got to do with Javascript?  \n  \nUnder the hood, our JS code gets converted to bytes that are stored in the computer hardware called [memory](https://web.stanford.edu/class/cs101/hardware-1.html).  \n  \nEach byte has its own memory address so the computer knows where different parts of the code can be found.  \n  \nJavascript _ _ _ _ _ _ _ _ _ _ _ _ _ manages memory for us - [refer to this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)`,
      answer: ["automatically"],
      hint: "refer to the link on the last line",
      tags: [TAGS.bitBytes],
    },
  ],
  datatypes: [
    {
      id: 51,
      title: "The need for different data types",
      question: `Think about the data we would want our code to work with... such as numbers or text.  \n  \nEg. we want to be able to do math with numbers like addition / multiplication whereas for text, we might want to convert all the letters to uppercase or lowercase.  \n  \nIn Javascript, every data has to have a data type - like \`number\` or \`string\`.  \n  \nDifferent data types support different operations.  \n  \nWhat is the data type of 123.02?`,
      answer: ["number"],
      hint: "google JS data types - be careful of capitalisation for the answer!",
      tags: [TAGS.datatypes],
    },
    {
      id: 52,
      title: "The 6 JS data types",
      question: `Learning about the [6 data types](http://cs.millersville.edu/~trogers/csci121/2016_fall/lectures/lecture11_notes.html) in Javascript is an essential starting point.  \n  \nThey are \`number\`, \`string\`, \`boolean\`, \`object\`, \`undefined\` and \`null\`.(quick note: missing more recently added \`BigInt\` & \`Symbol\`)\n  \nA good acronym to remember them by could be NO SNUB\n  \nWhich data type does Javascript array belong to?`,
      answer: ["Object"],
      hint: "reference the hyperlink in the question",
      tags: [TAGS.datatypes],
    },
    {
      id: 53,
      title: "Recognising strings",
      question: `Strings basically store text. Text is made up of 1 or more characters.  \n  \nThe text stored in a string is surrounded by double or single quotes or backticks ie. \`"text"\` or \`'text'\` or \`\`text\`\`.  \n  \nWhy are quotes needed to surround the text stored in string?  \n  \nBecause the quotes tell the computer to treat the characters as text instead of executing them eg. \`"console.log('hello')"\` is treated as text whereas \`console.log('hello')\` is executed by the computer  \n  \nWhich of the following isn't a string?\n"hello', "hi", 'boo'`,
      answer: [`"hello'`],
      hint: "check the quotes and include the quotes in your answer!",
      tags: [TAGS.datatypes, TAGS.strings],
    },
    {
      id: 54,
      title: "Recognising numbers",
      question: `The number data type is used to store numerical data with or without decimal places.  \n  \nThe numbers don't need to be surrounded by quotes unlike strings.  \n  \nWhich if the following beings to the number type?\nabc,'abc',123,'123'`,
      answer: ["123"],
      hint: "number data type only store numerical data and are not surrounded by any quotes",
      tags: [TAGS.datatypes],
    },
    {
      id: 55,
      title: "Recognising boolean values",
      question: `Boolean values are very important to learn because they are heavily heavily used in programming.  \n  \nFirstly, boolean values in Javascript can only take either of 2 values that are opposite of each other - \`true\` or \`false\`  \n  \nas keywords that indicate boolean values, \`true\` or \`false\` are not surrounded by quotes!  \n  \nWhich is a Javascript boolean value?\nTrue, false, "true", False`,
      answer: ["false"],
      hint:
        "notice the capitalisation / quotes ie. False is boolean value in Python but not in JS while 'False' is a string!",
      tags: [TAGS.datatypes, TAGS.boolean],
    },
    {
      id: 56,
      title: "Understanding null",
      question: `\`null\` represents the ***intentional absence*** of any value (note that value here doesn't refer to worth but more like data such as strings, numbers, boolean etc). Do remember it means *intentional absence* as you will come across \`null\` many more times in JS programming.  \n  \nLike \`true\` and \`false\`, \`null\` is a special keyword recognised by the computer and doesn't have quotes.  \n  \nSomething in Javascript that is \`null\` doesn't have any _ _ _ _ _`,
      answer: ["value"],
      hint: "read the definition of null in the question",
      tags: [TAGS.datatypes, TAGS.null],
    },
    {
      id: 57,
      title: "Understanding undefined",
      question: `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#Description) represents the ***unintentional absence*** of any object value.  \n  \nBoth \`undefined\` and \`null\` represents that something has no value but the key difference lies in the _ _ _ _ _ _ _ _ _ality `,
      answer: ["intention"],
      hint: "read the definition of null (intentional absence of any object value) and undefined",
      tags: [TAGS.datatypes, TAGS.undefined],
    },
    {
      id: 58,
      title: "Primitives",
      question: `Out of the 6 data types, \`number\`, \`string\`, \`boolean\`, \`undefined\` and \`null\` can be considered as **primitive** data types except \`object\`.  \n  \nThe concept of primitive data types is important because their values are **immutable** which means the value *cannot be altered*  \n  \nCheck this [Good reference](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) out as it has a good example of immutability  \n  \nWhich of the following data type is mutable?\nobject, string, number, boolean, null, undefined`,
      answer: ["object", "Object"],
      hint: "Check the reference out",
      tags: [TAGS.datatypes, TAGS.mutability],
    },
    {
      id: 59,
      title: "Identifying objects",
      question: `The object data type is like a container that can store multiple key-value pairs.  \n  \nIt is identifiable by (1) outer curly braces, (2) colon between each key and value and (3) comma separated key-value pairs {key1: value1, key2: value2}  \n  \nUnlike primitive data types that can only store a single value, each key-value pair in an object can contain values like strings or even other objects!  \n  \nHow many key-value pairs can be found in \`{key1:"hello", key2:"world",four:"hi there"}\`?`,
      answer: ["3"],
      hint:
        "Each key-value pair has a colon between the key and value. They are separated from other key-value pairs by commas",
      tags: [TAGS.datatypes, TAGS.objects],
    },
    {
      id: 60,
      title: "Arrays and Functions",
      question: `Two very important concepts in Javascript that we will cover are arrays and functions.  \n  \nAt this point, just note that arrays and functions are of \`object\` data type  \n  \nThey have special features which we will explore further  \n  \nThe data type of array is _ _ _ _ _ _`,
      answer: ["object"],
      hint: "the answer is in the question description",
      tags: [TAGS.datatypes, TAGS.objects],
    },
  ],
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
const introQns = [
  ...questions["aboutJs"],
  ...questions["whatIsCoding"],
  ...questions["consoleLog"],
];
const bitByteQns = questions["bitBytes"];
const dataTypeQns = questions["datatypes"];
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
    questions: bitByteQns,
  },
];
const chapter3 = [
  "chapter 3",
  {
    name: chapterTitles.chapter3,
    story: "Mastery of Javascript starts with recognising data types!",
    questions: dataTypeQns,
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
