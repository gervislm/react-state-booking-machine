import React, { useState } from "react";
import "./Passengers.css";

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState("");

  const goToTicket = () => {
    send({ type: "DONE" });
  };

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    send({ type: "ADD", newPassenger: value });
    changeValue("");
  };

  const { passengers } = state.context;

  return (
    <form onSubmit={submit} className="Passengers">
      <p className="Passengers-title title">
        Add people who are going to fly ✈️
      </p>

      {passengers.map((person, idx) => (
        <p className="Passenger-name" key={`person-${idx}`}>
          - {person}
        </p>
      ))}

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Write full name"
        required
        autoComplete="name"
        value={value}
        onChange={onChangeInput}
      />
      <div className="Passengers-buttons">
        <button className="Passengers-add button-secondary" type="submit">
          Add Passenger
        </button>
        <button
          onClick={goToTicket}
          className="Passenger-pay button"
          type="button"
        >
          View my ticket
        </button>
      </div>
    </form>
  );
};
