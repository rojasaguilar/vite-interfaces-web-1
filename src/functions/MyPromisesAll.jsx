import React from "react";

function MyPromisesAll() {
  function fncSumarLento(numero) {
    return new Promise((resolve, reject) => {
      if (numero >= 5) {
        reject("Sumar lento falló ");
      } else {
        setTimeout(() => {
          resolve(numero + 1);
        }, 800);
      }
    });
  }

  const fcnSumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(numero + 1), 300);
    });
  };

  //   fncSumarLento(5).then(result => console.log(`Resultado: ${result}`));
  //   fcnSumarRapido(8).then(result => console.log(`Resultado: ${result}`));

  Promise.all([fncSumarLento(40), fcnSumarRapido(8)])
    .then((result) => {
      result.forEach((response) => {
        console.log(`Result: ${response}`);
      });
    })
    .catch((onReject) => {
      console.log("el error", onReject);
    });

  return (
    <>
      <h1>Programa de funciones con Promises ALL</h1>
    </>
  );
}

export default MyPromisesAll;
