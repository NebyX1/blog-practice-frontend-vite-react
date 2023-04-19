import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "../templates/Listado";
import { useParams } from "react-router-dom";

export const ArticuloSingle = () => {  

  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

 
 const conseguirArticulo = async () => {
    const url = Global.url_base+"articulo/" + params.id;
    
    const {datos, cargando} = await Peticion(url, "GET");
 


    if (datos.status === "success") {
      setArticulo(datos.articulo);
      setCargando(false);
    }
  };

 return (
  <>
{cargando ? "Cargando..." : (<div className="jumbo">
 <div className="mascara">
          {articulo.imagen != "default.png" && (
            <img src={Global.url_base + "imagen/" + articulo.imagen} />
          )}
          {articulo.imagen == "default.png" && (
            <img src="https://cdn.hackr.io/uploads/topics_svg/javascript.svg" />
          )}
        </div>
<h1>{articulo.titulo}</h1>
<p>{articulo.contenido}</p>
</div>)
}
</>
);

};
