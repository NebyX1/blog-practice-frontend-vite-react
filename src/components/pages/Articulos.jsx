import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "../templates/Listado";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url_base+"articulos";
    
    const {datos, cargando} = await Peticion(url, "GET");
    

    if (datos.status === "success") {
      setArticulos(datos.articulos);
      setCargando(false);
    }
  };

  return (
    <>
    {cargando ? "Cargando..." : ""}
    {
    articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos} /> :
(

  <h1>No hay artículos</h1>

)
      }
    </>
  );
};
