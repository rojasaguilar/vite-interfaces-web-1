import React from "react";

function MyFetchPost() {
  let usuario = {
    nombre: "Aitana",
    edad: 43,
  };

  fetch("https://reqres.in/api/users/Aitana?api_key=reqres-free-v2", { //API KEY ERRONEA PARA PROVOCAR ERROR (CAMBIAR A v1)
    method: "POST",
    body: JSON.stringify(usuario), //objeto usuario a enviar a enviar
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((respObj) => console.log(respObj))
    .catch((error) => console.error(error));
  return (
    <>
      <h1>MyFetchPost</h1>
    </>
  );
}

export default MyFetchPost;
