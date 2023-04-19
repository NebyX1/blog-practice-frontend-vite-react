import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
const [resultado, setResultado] = useState("no_enviado");

const guardarArticulo = async (e) => {
  e.preventDefault();
  let nuevoArticulo = formulario;

  const { datos, cargando } = await Peticion(
    Global.url_base + "crear",
    "POST",
    nuevoArticulo
  );
  if (datos.status === "success") {
    setResultado("guardado");

    const fileInput = document.querySelector("#file");

    if (fileInput.files[0]) {
      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      const subida = await Peticion(
        Global.url_base + "subir-imagen/" + datos.articulo._id,
        "POST",
        formData,
        true
      );

      if (subida.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }
    }
  } else {
    setResultado("error");
  }
};

useEffect(() => {
  if (resultado === "guardado") {
    const formElements = document.querySelectorAll(".formulario input, .formulario textarea");
    
    formElements.forEach((element) => {
      if (element.type !== "submit") {
        element.value = "";
      }
    });
  }
  // setResultado("no_enviado")
}, [resultado]);

  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>

      <strong>{resultado == "guardado"? "Articulo guardado con exito" : ""}</strong>
      <strong>
        {resultado == "error"
          ? "Ha habido un error, los datos no son correctos"
          : ""}
      </strong>

      <form onSubmit={guardarArticulo}>
        <div className="formulario">
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" onChange={cambiado} />
          </div>

          <div className="form-group">
            <label htmlFor="contenido">Contenido</label>
            <textarea type="text" name="contenido" onChange={cambiado} />
          </div>

          <div className="form-group">
            <label htmlFor="file0">Imagen</label>
            <input type="file" name="file0" id="file" />
          </div>

          <input type="submit" value="Guardar" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};
