import React from 'react'

const Minesweeper = () => {

  const rows = 10
  const columns = 10
  const counter = 10
  const location =[]
  const clicked = 0
  var flagEnabled =false

  const endgame=false
  const boardsgame =() => {
    let board =[]
    for (let x = 0; x < 10; x++){
          board[x] =[]
          for (let y = 0; y < 10; y++){
            board[x][y] =1
          }
    }
  }


  return (
    <>
    <div className = "minesweeper-container">
      <div>
    <div className ="title">Minesweeper</div>
    <div className="minesweeper-board">

    </div>
    </div>
    <img className= "flag" src ="https://m.media-amazon.com/images/I/61Cvq7YZ4xL.png"/>
    <div className ="start-new-game">
       <button className = "button">Start New Game</button>

    </div>
    <h2 className = "counter">Current Mines Left = {counter }</h2>
    <div >{boardsgame()}</div>
    </div>
    </>
  )
}

export default Minesweeper