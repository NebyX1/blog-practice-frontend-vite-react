import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url_base+"articulos";
    
    const {datos, cargando} = await Peticion(url, "GET");
    
    // let peticion = await fetch(url, {
    //   method: "GET",
    // });
    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
    {
    articulos.length >= 1 ? (
      articulos.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              <img src="https://cdn.hackr.io/uploads/topics_svg/javascript.svg" />
            </div>

            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        );
      })

)
:
(

  <h1>No hay artículos</h1>

)
      }
    </>
  );
};
