import React, { useState, useContext,useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Cell = () => {
  const ctx = useContext(GlobalContext);

  const getValue = () => {
    
    if (!ctx.loop.isRevealed) {
      return ctx.loop.isFlagged ? "🚩" : null;
    }
    if (ctx.loop.isMine) {
      return "💣";
    }
    if (ctx.loop.neighbour === 0) {
      return null;
    }
    return ctx.loop.neighbour;
  }
  
  
  return (
    <div><div
    onClick={ctx.setOnClick}
    onContextMenu={ctx.setCMenu}
  >
  {this.getValue()}
  </div></div>
  )
}

export default Cell

const cellItemShape = {
  ctx.loop.isRevealed: bool,
  ctx.loop.isMine: bool,
  ctx.loop.isFlagged: bool
}