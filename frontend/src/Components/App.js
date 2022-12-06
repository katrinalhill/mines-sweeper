import Minesweeper from "./Minesweeper";
import { ContextProvider, GlobalContext } from "../Context/GlobalContext";
import Game from "./Game";
import Board from "./Board"
import { Code } from "./Code";

function App() {

  return (
    <>

    <ContextProvider>
    <div className="App">
      <Code/>
      <Game/>
      <Board/>
    </div>
    <Minesweeper/>
    </ContextProvider>
    </>
  );
}

export default App;

{/* <Minesweeper/> */}