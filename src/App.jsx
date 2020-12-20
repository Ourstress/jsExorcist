import Game from "./components/game";
import Story from "./components/story";
import Navbar from "./components/navbar";
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
      <Navbar />
      <main className="container">
        <Game />
        <Story />
      </main>
    </div>
  );
}

export default App;
