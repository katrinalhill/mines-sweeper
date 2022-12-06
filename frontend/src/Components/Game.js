import React, { useState, useContext,useEffect } from "react";
import Board from './Board';
import { GlobalContext } from "../Context/GlobalContext";

const Game = () => {
  const ctx = useContext(GlobalContext);

  return (
    <div>
      <div>
      <div className="game">
        <Board height={ctx.game.height} width={ctx.game.width} mines={ctx.game.mines} />
      </div>
      </div>
    </div>
  )
}

export default Game