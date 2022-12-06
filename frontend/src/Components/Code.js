import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export const Code = () => {
  const ctx = useContext(GlobalContext);

  const revealEmpty= (x, y, data)=> {
    console.log("typeof",typeof x)
    let area = this.traverseBoard(x, y, data);
    console.log(typeof x)
    area.map(value => {
      if (!value.isFlagged && !value.isRevealed && (value.isEmpty || !value.isMine)) {
        data[value.x][value.y].isRevealed = true;

        if (value.isEmpty) {
          this.revealEmpty(value.x, value.y, data);
        }
      }
    });
    return data;
  }
  const handleContextMenu = (event, x, y) => {  event.preventDefault(); 
    let updatedData = this.state.boardData;  
    let mines = this.state.mineCount;  
    let win = false;  
    if (updatedData[x][y].isRevealed) return;  
    if (updatedData[x][y].isFlagged) {    updatedData[x][y].isFlagged = false;    mines++;  
    } else {    updatedData[x][y].isFlagged = true;    mines--;  }  
    if (mines === 0) {    
      const mineArray = this.getMines(updatedData);    
      const FlagArray = this.getFlags(updatedData);    
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {      
        this.revealBoard();      alert("You Win");    
    }  
  }  this.setState({    
        boardData: updatedData,    
        mineCount: mines,    
        gameWon: win,  
      });
    }



  
  const handleCellClick = (x, y) => {  // check if revealed. return if true.
    let win = false;  //ejfwioejfiowjefiowjeiofjwioefjwoief
    if (this.state.boardData[x][y].isRevealed ||    this.state.boardData[x][y].isFlagged) return null;// check if mine. game over if true
    if (this.state.boardData[x][y].isMine) {
      this.setState({gameStatus: "You Lost."});
      this.revealBoard();
      alert("game over");
    }  let updatedData = this.state.boardData;
    
    if (updatedData[x][y].isEmpty) {
     updatedData = this.revealEmpty(x, y, updatedData);
    }if (this.getHidden(updatedData).length === this.props.mines) {
     this.setState({gameStatus: "You Win."});
     this.revealBoard();
     alert("You Win");
    }  this.setState({
     boardData: updatedData,
     mineCount: this.props.mines -this.getFlags(updatedData).length,
     gameWon: win,
    });
  }

  const renderBoard = (data) => {  return data.map((datarow) => {    return datarow.map((dataitem) => {      return (
    <div 
      key={dataitem.x * datarow.length + dataitem.y}>
      <Cell
        onClick={() => this.handleCellClick(dataitem.x, dataitem.y)}
        cMenu={(e) => this.handleContextMenu(e, dataitem.x, dataitem.y)}
        value={dataitem}
      />// This line of code adds a clearfix div after the last cell of each row.
      {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ""}        </div>
  );
})
});
}
  const createEmptyArray = (height, width) => {
    let data = [];

    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
        };
      }
    }
    return data;
  };

  const initBoardData = (height, width, mines) => {
    let data = ctx.loop.createEmptyArray(ctx.game.height, ctx.game.width);
    data = ctx.loop.plantMines(
      ctx.game.data,
      ctx.game.height,
      ctx.game.width,
      ctx.game.mines
    );
    data = ctx.loop.getNeighbours(
      ctx.game.data,
      ctx.game.height,
      ctx.game.width
    );

    return data;
  };

  return <div>Code</div>;
};
