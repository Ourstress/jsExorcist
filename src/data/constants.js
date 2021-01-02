const QUESTIONSTATUS = {
  pending: "pending attempts",
  trying: "in progress",
  correct: "found correct answer!",
};

const TAGS = {
  consoleLog: "console.log",
  whatIsCode: "what is coding",
  aboutJs: "introducing what Javascript is about",
  bitBytes: "explaining binary numbers, bits and bytes",
  datatypes: "Javascript data types",
  strings: "JS Strings",
  boolean: "boolean values",
  null: "null data type",
  undefined: "undefined data type",
  mutability: "mutability",
  objects: "JS objects",
  variables: "JS variables",
  keyword: "JS keywords",
};

const UTILITYFNS = {
  nestedValue: function (obj, key) {
    return key.split(".").reduce(function (o, x) {
      return typeof o == "undefined" || o === null ? o : o[x];
    }, obj);
  },
  // from array of objects with key called 'value' [{key:1},{key:2}] retrieve [1,2] in string format
  arrayObjKeyValue: function (obj, arrayLocation) {
    const array = this.nestedValue(obj, arrayLocation);
    return array.map((item) => item.hasOwnProperty("value") && item.value).toString();
  },
};

const QUESTIONTYPE = {
  code: "code",
};
export { QUESTIONSTATUS, TAGS, UTILITYFNS, QUESTIONTYPE };
