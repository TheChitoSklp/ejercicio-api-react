import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import icon from "../assets/icons/icon-dice.svg";
import divider from "../assets/icons/pattern-divider-desktop.svg";

export const Card = ({ url }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    const parrafo = data.slip.advice;
    const idParrafo = data.slip.id;

    return (
      <div className="centered-container">
        <div>
          <h4>ADVICE #{idParrafo}</h4>
          <p>{parrafo}</p>
          <img src={divider} alt="" />
        </div>
        <button className="btn" onClick={() => window.location.reload()}>
          <img src={icon} alt="" />
        </button>
      </div>
    );
  }

  return null;
};
