import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "../templates/Listado";
import { useParams } from "react-router-dom";

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulos();
  }, []);

  useEffect(() => {
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {
    const url = Global.url_base + "buscar/" + params.busqueda;

    const { datos, cargando } = await Peticion(url, "GET");

    if (datos.status === "success") {
      setArticulos(datos.articulos);
      setCargando(false);
    } else {
      setArticulos([]);
    }
  };

  return (
    <>
      {cargando ? "Cargando..." : ""}
      {articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <h1>No hay artículos</h1>
      )}
    </>
  );
};
