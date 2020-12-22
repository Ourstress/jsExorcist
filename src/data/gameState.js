const gameData = new Map([
  [
    "chapter 1",
    {
      name: "chapter 1",
      story:
        "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
      questions: [
        {
          id: 1,
          title: "Meet print!",
          question: 'What is displayed by `print("hello world")`?',
          answer: "hello world",
          hint:
            "The *print* function tells the computer to display the value of a python object given to it",
        },
        { id: 2, title: 2, question: "", answer: "", hint: "a" },
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
    },
  ],
  [
    "chapter 2",
    {
      name: "chapter 2",
      story:
        "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
      questions: [
        { id: 13, title: 1, question: "hello", answer: "", hint: "i" },
      ],
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
