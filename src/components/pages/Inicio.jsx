import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="jumbo">
      <h1>Blog de prueba con React</h1>
      <p>Blog MERN Stack (Mongo, Express, React y Node)</p>
      <Link to="/articulos" className="button">
        Ver Artículos
      </Link>
    </div>
  );
};
