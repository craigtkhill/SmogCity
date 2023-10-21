// app/components/CityView.tsx
import React from "react";
import Image from "next/image";
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
