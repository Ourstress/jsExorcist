import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
import jpMtn from "./assets/mountain_pattern.png";
function App() {
  const gameState = new Map([
    [
      "chapter 1",
      {
        story:
          "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
        questions: [
          {
            title: "Meet print!",
            question: 'What is displayed by `print("hello world")`?',
            answer: "hello world",
            hint:
              "The *print* function tells the computer to display the value of a python object given to it",
            status: "pending attempts",
          },
          {
            title: 2,
            question: "",
            answer: "",
            hint: "a",
            status: "found correct answer!",
          },
          {
            title: 3,
            question: "",
            answer: "",
            hint: "b",
            status: "in progress!",
          },
          {
            title: 4,
            question: "",
            answer: "",
            hint: "c",
            status: "pending attempts",
          },
          {
            title: 5,
            question: "",
            answer: "",
            hint: "d",
            status: "pending attempts",
          },
          {
            title: 6,
            question: "",
            answer: "",
            hint: "e",
            status: "pending attempts",
          },
          {
            title: 7,
            question: "",
            answer: "",
            hint: "f",
            status: "pending attempts",
          },
          {
            title: 8,
            question: "",
            answer: "",
            hint: "g",
            status: "pending attempts",
          },
          {
            title: 9,
            question: "",
            answer: "",
            hint: "h",
            status: "pending attempts",
          },
          {
            title: 10,
            question: "",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
          {
            title: 11,
            question: "",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
          {
            title: 12,
            question: "",
            answer: "",
            hint: "i",
            status: "pending attempts",
          },
        ],
      },
    ],
  ]);
  const currentChapterIndex = Array.from(gameState.keys())[0];
  const currentChapter = gameState.get(currentChapterIndex);
  return (
    <div
      style={{
        backgroundImage: `url(${jpMtn})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar currentChapter={currentChapter} />
      <main
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 2,
          justifyContent: "space-between",
        }}
      >
        <Game currentChapter={currentChapter} />
        <Story currentChapter={currentChapter} />
      </main>
    </div>
  );
}

export default App;
