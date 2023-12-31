// app/components/CityView.tsx
"use client";

import React from "react";
import ControlPanel from "./ControlPanel";
import { useGameContext } from "../lib/GameContext";

const CityView: React.FC = () => {
  const gameContext = useGameContext();
  const imageUrl = gameContext ? gameContext.imageUrl : "";

  return (
    <div className="city-view">
      <img src={imageUrl} alt="City View" />
      <ControlPanel />
    </div>
  );
};

export default CityView;
