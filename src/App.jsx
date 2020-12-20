import ChapterModal from "./components/chaptersModal";
import Game from "./components/game";
import Story from "./components/story";
function App() {
  return (
    <main className="container my-3">
      <Game />
      <ChapterModal />
      <Story />
    </main>
  );
}

export default App;
