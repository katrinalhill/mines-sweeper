import React, { useState, createContext } from "react";

const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [game, setGame] = useState({height: 10, width: 10, mines: 8});
  const [value, setValue] = useState([]);
  const [onClick, setOnClick] = useState([]);
  const [cMenu, setCMenu] = useState([]);
  const [mineCount, setMineCount] = useState([]);
  const [state, setState] = useState({
    boardData:{height: 10, width: 10, mines: 10},
    gameStatus:false,
    mineCount: 10
  });

  const [loop, setLoop] = useState(
    {x: [],
    y: [],
    isMine: false, 
    neighbour: 0, 
    isRevealed: false, 
    isEmpty: false, 
    isFlagged: false});

    const [traverseBoard, setTraverseBoard] = useState("");
    const [revealEmpty, setRevealEmpty] = useState("");


  const ctx = {
    game,
    setGame,
    value,
    setValue,
    onClick,
    setOnClick,
    cMenu,
    setCMenu,
    mineCount,
    setMineCount,
    loop, 
    setLoop,
    state,
    setState,
    traverseBoard, 
    setTraverseBoard
  };


  return (
    <GlobalContext.Provider value={ctx}>{children}</GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };


