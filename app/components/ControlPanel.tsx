// app/components/ControlPanel.tsx
"use client";

import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useGameContext } from "../lib/GameContext";
import Resources from "./Resources";
import { educationalResources } from "../resources";

const ControlPanel: React.FC = () => {
  const [command, setCommand] = useState("");
  const [level, setLevel] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState("");
  const { handleUserInput } = useGameContext();

  const currentPair = educationalResources[level];

  const handleCommandChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCommand(event.target.value);
      setError(""); // Clear error on typing
    },
    []
  );

  const handleCommandSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const correct =
        command.toLowerCase() === currentPair.innovation.toLowerCase();
      setIsCorrect(correct);
      if (correct) {
        setCommand("");
        handleUserInput();
        setError("");
      } else {
        setError("Incorrect! Please try again.");
      }
    },
    [command, currentPair.innovation, handleUserInput]
  );

  const handleNext = useCallback(() => {
    setIsCorrect(false);
    setError("");
    setLevel((prev) => (prev + 1) % educationalResources.length);
  }, []);

  return (
    <div className="control-panel">
      <h2 className="panel-title">{currentPair.title}</h2>
      <p className="panel-description">{currentPair.description}</p>
      <p className="panel-subtitle">Clues:</p>
      <Resources resources={currentPair.resources} />
      {isCorrect && (
        <div className="panel-correct">
          <p className="panel-innovation">
            Innovation: {currentPair.innovation}
          </p>
          <img
            className="panel-image"
            src={currentPair.imageUrl}
            alt="Innovation"
          />
          <button className="panel-button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      <form onSubmit={handleCommandSubmit}>
        <input
          type="text"
          value={command}
          onChange={handleCommandChange}
          placeholder="Answer..."
          className="panel-input"
        />
        <button type="submit" className="panel-button">
          Innovate
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ControlPanel;
