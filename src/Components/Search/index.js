import React, { useState } from "react";
import "./Search.css";

export const Search = ({ send }) => {
  const [flight, setFlight] = useState("");

  const goToPassengers = () => {
    send({ type: "CONTINUE", selectedCountry: flight });
  };

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const options = ["Mexico", "Venezuela", "Colombia"];

  return (
    <div className="Search">
      <p className="Search-title title">Find your destination</p>
      <select
        id="country"
        className="Search-select"
        value={flight}
        onChange={handleSelectChange}
      >
        <option value="" disabled defaultValue>
          Select a Country
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={goToPassengers}
        disabled={flight === ""}
        className="Search-continue button"
      >
        Continue
      </button>
    </div>
  );
};
