// app/lib/GameContext.tsx

import React, { createContext, useState, useCallback, useContext } from "react";
import game from "./gameLogic";

const GameContext = createContext(null);

export const GameProvider: React.FC = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(game.getImageUrl());

  const handleUserInput = useCallback(() => {
    game.handleUserInput();
    setImageUrl(game.getImageUrl());
  }, []);

  return (
    <GameContext.Provider value={{ imageUrl, handleUserInput }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
