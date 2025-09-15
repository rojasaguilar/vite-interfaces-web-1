import React from "react";

function MyPromisesRace() {
  function fcnSumarLento(numero) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(numero + 1);
      }, 800);
    });
  }

  let fcnSumarRapido = (numero) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("Error en la función lenta");
      }, 1000);
    });
  };

  Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then((results) => console.log(`Resultados: ${results}`))
    .catch((err) => console.log(err));

  return (
    <>
      <h1>Programa de Funciones con Promesas RACE</h1>
    </>
  );
}

export default MyPromisesRace;
