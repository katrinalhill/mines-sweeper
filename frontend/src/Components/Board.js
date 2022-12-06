import React, { useState, useContext,useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Board = () => {
  const ctx = useContext(GlobalContext);
  //let mineCount = ctx.state.mineCount
  return (
    <div> <div className="board">
    <div className="game-info">
      <span className="info">
        mines: {ctx.state.mineCount} or mines: {ctx.game.mines}
      </span>

      <br />
      <span className="info">
        {ctx.state.gameStatus}
      </span>
    </div>
    {/* { ctx.renderBoard(ctx.state.boardData)} */}
  </div></div>
  )
}

export default Board