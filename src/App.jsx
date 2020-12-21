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
        height: "100vh",
      }}
    >
      <Navbar />
      <main className="container">
        <Game />
        <Story currentChapter={currentChapter} />
      </main>
    </div>
  );
}

export default App;
