import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LeftSide />
        <RightSide />
      </main>
    </div>
  );
}

export default App;
