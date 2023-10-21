// app/components/CityView.tsx
import React from "react";
import ControlPanel from "./ControlPanel";
import { useGameContext } from "../lib/GameContext";

const CityView: React.FC = () => {
  const { imageUrl } = useGameContext();

  return (
    <div className="city-view">
      <img src={imageUrl} alt="City View" />
      <ControlPanel />
    </div>
  );
};

export default CityView;
