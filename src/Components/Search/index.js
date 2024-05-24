import React, { useState } from "react";
import "./Search.css";

export const Search = ({ send, state }) => {
  const [flight, setFlight] = useState("");

  const goToPassengers = () => {
    send({ type: "CONTINUE", selectedCountry: flight });
  };

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const { countries } = state.context;

  return (
    <div className="Search">
      <p className="Search-title title">Find your destination</p>
      <select
        id="country"
        className="Search-select"
        autoComplete="country"
        value={flight}
        onChange={handleSelectChange}
        required
      >
        <option value="" disabled defaultValue>
          Select a Country
        </option>
        {countries.map((country) => (
          <option value={country.name.common} key={country.name.common}>
            {country.name.common}
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
