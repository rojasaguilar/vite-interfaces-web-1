import React, { useEffect } from "react";

function MyFetchPut() {
  let usuario = {
    nombre: "Paola",
    edad: 32,
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users/Aitana?api_key=reqres-free-v1", { //suponiendo que podemos acceder al recurso con el nombre
      method: "PUT",
      body: JSON.stringify(usuario), //objeto usuario a enviar a enviar
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(` Error en la peticion ${resp.status}`);
        }
        return resp.json();
      })
      .then((respObj) => console.log(respObj))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>MyFetchPut</h1>
    </>
  );
}

export default MyFetchPut;
