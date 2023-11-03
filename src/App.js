import "./App.css";
import SlotMachine from "./games/SlotMachine";

function App() {
  return (
    <div className="App">
      <div>
        <h2>🙋‍♂️ WELCOME 🙋‍♂️</h2>
        <h1 style={{ fontWeight: "bold" }}>🎰Slot Machine Game🎰 </h1>
      </div>
      <hr />
      <SlotMachine x=" 😄" y=" 😄" z=" 👍" />
      <SlotMachine x=" 😄" y=" 😄" z=" 😄" />
    </div>
  );
}

export default App;
