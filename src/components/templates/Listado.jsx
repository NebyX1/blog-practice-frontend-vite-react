import React from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Link } from "react-router-dom";

export const Listado = ({ articulos, setArticulos }) => {

  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url_base + "articulo/" + id, "DELETE");
    if(datos.status === "success"){
    let articulosActualizados = articulos.filter(articulo => articulo._id !== id)
    setArticulos(articulosActualizados);
    }
    }


  return articulos.map((articulo) => {
    return (
      <article key={articulo._id} className="articulo-item">
        <div className="mascara">
          {articulo.imagen != "default.png" && (
            <img src={Global.url_base + "imagen/" + articulo.imagen} />
          )}
          {articulo.imagen == "default.png" && (
            <img src="https://cdn.hackr.io/uploads/topics_svg/javascript.svg" />
          )}
        </div>

        <div className="datos">
          <h3 className="title"><Link to={"/articulo-single/" + articulo._id}>{articulo.titulo}</Link></h3>
          <p className="description">{articulo.contenido}</p>
          <Link className="edit" to={"/editar/"+articulo._id}>Editar</Link>
          <button className="delete" onClick={() => {eliminar(articulo._id)}}>Borrar</button>
        </div>
      </article>
    );
  });
};
