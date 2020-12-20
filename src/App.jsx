import ChapterModal from "./components/chaptersModal";
import Game from "./components/game";
import Story from "./components/story";
import jpMtn from "./assets/mountain_pattern.png";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${jpMtn})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <main className="container">
        <Game />
        <ChapterModal />
        <Story />
      </main>
    </div>
  );
}

export default App;
