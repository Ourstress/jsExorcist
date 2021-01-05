import { TAGS } from "../constants";

const datatypeQns = [
  {
    id: 51,
    title: "The need for different data types",
    question: `Think about the data we would want our code to work with... such as numbers or text.  \n  \nEg.  \nNumbers - we want to be able to do math with numbers such as addition / multiplication.  \nText - whereas for text, we might want to convert all the letters to uppercase or lowercase.  \n  \nTo support different operations for different kinds of data, every piece of data in Javascript has to have a data type - like \`number\` or \`string\`.  \n  \nDifferent data types support different operations.  \n  \nWhat is the data type of 123.02?`,
    answer: ["number"],
    hint: "google JS data types - be careful of capitalisation for the answer!",
    tags: [TAGS.datatypes],
  },
  {
    id: 52,
    title: "The 6 JS data types",
    question: `Learning about the [6 data types](http://cs.millersville.edu/~trogers/csci121/2016_fall/lectures/lecture11_notes.html) in Javascript is an essential starting point.  \n  \nThey are \`number\`, \`string\`, \`boolean\`, \`object\`, \`undefined\` and \`null\`.(quick note: missing the more recently added \`BigInt\` & \`Symbol\` data types which are more uncommon)\n  \nA good acronym to remember them by could be NO SNUB\n  \nCounting \`BigInt\` & \`Symbol\`, how many data types are there in Javascript altogether?`,
    answer: ["8"],
    hint: "answer can be found in the question",
    tags: [TAGS.datatypes],
  },
  {
    id: 53,
    title: "Recognising strings",
    question: `Strings basically store text. Text is made up of 1 or more characters eg. \`"a@c"\` is made up of the characters \`a\`, \`@\` and \`c\`.  \n  \nThe text stored in a string is surrounded by double quotes, single quotes or backticks ie. \`"text"\` or \`'text'\` or \`\`text\`\`.  \n  \nWhy are quotes needed to surround the text stored in string?  \n  \nBecause the quotes tell the computer to treat the characters as text instead of executing them eg. \`"console.log('hello')"\` is treated as text whereas \`console.log('hello')\` is executed by the computer  \n  \nWhich of the following isn't a string?  \n\`"hello'\`, \`"hi"\`, \`'boo'\``,
    answer: [`"hello'`],
    hint: "check the quotes and include the quotes in your answer!",
    tags: [TAGS.datatypes, TAGS.strings],
  },
  {
    id: 54,
    title: "Recognising numbers",
    question: `The number data type is used for *numerical data* with or without decimal places.  \n  \nRecall string data type is used for text data...  \n  \nThe number data type doesn't need to be surrounded by quotes so \`567\` is of number data type while \`"567"\` is of string data type.  \n  \nWhich of the following beings to the number type?  \nabc,'abc',123,'123'`,
    answer: ["123"],
    hint: "number data type only store numerical data and are not surrounded by any quotes",
    tags: [TAGS.datatypes],
  },
  {
    id: 55,
    title: "Recognising boolean values",
    question: `Boolean values are very important to learn because they are heavily heavily used in programming.  \n  \nBoolean values in Javascript can only take either of 2 values that are opposite of each other - \`true\` or \`false\`  \n  \nIf we compare boolean values to *green / red traffic lights* and our code to a *big traffic network*, we can visualise how important they are in programming.  \n  \nAs keywords that indicate boolean values, \`true\` or \`false\` are not surrounded by quotes!  \n  \nWhich is a Javascript boolean value?  \nTrue, false, "true", False`,
    answer: ["false"],
    hint:
      "notice the capitalisation / quotes ie. False is boolean value in Python but not in JS while 'False' is a string!",
    tags: [TAGS.datatypes, TAGS.boolean],
  },
  {
    id: 56,
    title: "Understanding null",
    question: `\`null\` is a value that represents the ***intentional absence*** of any data. When we see a value that is \`null\`, that value wasn't supposed to contain any data in the first place.  \n  \nMost of the time, we are working with values that contain data and have data types like strings, numbers, boolean etc. Hence, encountering \`null\` values could give us a surprise.  \n  \nYet we will come across \`null\` values many times in JS programming and it would be helpful to remember that the value that is \`null\` simply doesn't have any data in the very first place - and then work backwards to find the bug if it wasn't what we expect.  \n  \nLike \`true\` and \`false\`, \`null\` is a special keyword recognised by the computer and doesn't have quotes.  \n  \nSomething in Javascript that is \`null\` doesn't have any _ _ _ _`,
    answer: ["data"],
    hint: "read the definition of null in the question",
    tags: [TAGS.datatypes, TAGS.null],
  },
  {
    id: 57,
    title: "Understanding undefined",
    question: `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#Description) represents the ***unintentional absence*** of any data.  \n  \nWhen we introduce concepts like variables and objects, we will see where we can encounter values which *should be expected to have data* or be \`null\` yet fall in neither of both cases.   \n  \nBoth \`undefined\` and \`null\` represents that something has no value but the key difference lies in the _ _ _ _ _ _ _ _ _ality.`,
    answer: ["intention"],
    hint: "read the definition of null (intentional absence of any object value) and undefined",
    tags: [TAGS.datatypes, TAGS.undefined],
  },
  {
    id: 58,
    title: "Primitives",
    question: `Out of the 6 data types, \`number\`, \`string\`, \`boolean\`, \`undefined\` and \`null\` can be considered as **primitive** data types except \`object\`.  \n  \nThe concept of primitive data types is important because their values are **immutable** which means it *cannot be altered*.  \n  \nHaving a good understanding of mutability is essential for a programming in Javascript because there are so many ways to introduce subtle bugs by [accidentally mutating something](https://www.digitalocean.com/community/tutorials/js-mutability).   \n  \nCheck out this [Good reference](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) as it has a good example of immutability too!  \n  \nWhich of the following data type is mutable?\nobject, string, number, boolean, null, undefined`,
    answer: ["object", "Object"],
    hint: "Check the reference out",
    tags: [TAGS.datatypes, TAGS.mutability],
  },
  {
    id: 59,
    title: "Identifying objects",
    question: `The object data type is like a container that can store multiple key-value pairs.  \n  \nIt is identifiable by (1) outer curly braces, (2) colon between each key and value and (3) comma separated key-value pairs {key1: value1, key2: value2}  \n  \nUnlike primitive data types that can only store a single value, each key-value pair in an object can contain values like strings or even other objects!  \n  \nHow many key-value pairs can be found in \`{key1:"hello", key2:123, keythree:{santa:"claus"},four:"hi there"}\`?`,
    answer: ["5"],
    hint:
      "Each key-value pair has a colon between the key and value. They are separated from other key-value pairs by commas",
    tags: [TAGS.datatypes, TAGS.objects],
  },
  {
    id: 60,
    title: "Arrays and Functions",
    question: `While \`object\` is the only non-primitive data type, it is the backbone of two very important tools in Javascript - arrays and functions.  \n  \nYou probably already used arrays eg. \`[1,2,3]\` and functions eg. \`console.log('something')\`.   \n  \nAlthough they don't look like objects eg.\`{key:"some value"}\`, arrays and functions have the data type of \`object\`. They are like *special* objects. \n  \nThe data type of array is _ _ _ _ _ _`,
    answer: ["object"],
    hint: "the answer is in the question description",
    tags: [TAGS.datatypes, TAGS.objects],
  },
];

export default datatypeQns;
