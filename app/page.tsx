// app/page.tsx
"use client";

import React from "react";
import { GameProvider } from "./lib/GameContext";
import CityView from "./components/CityView";

const Page: React.FC = () => {
  return (
    <GameProvider>
      <div className="game-container">
        <CityView />
      </div>
    </GameProvider>
  );
};

export default Page;
