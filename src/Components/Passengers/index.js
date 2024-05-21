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

  const list = [];

  return (
    <form onSubmit={submit} className="Passengers">
      <p className="Passengers-title title">
        Agrega a las personas que van a volar ✈️
      </p>
      <ul>
        {list.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Escribe el nombre completo"
        required
        value={value}
        onChange={onChangeInput}
      />
      <div className="Passengers-buttons">
        <button
          onClick={(value) => list.push(value) && console.log(list)}
          className="Passengers-add button-secondary"
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          onClick={goToTicket}
          className="Passenger-pay button"
          type="button"
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};
