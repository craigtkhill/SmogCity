// app/lib/GameContext.tsx
"use client";

import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from "react";
import game from "./gameLogic";

type GameContextType = {
  imageUrl: string;
  handleUserInput: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider = ({ children }: GameProviderProps) => {
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
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
