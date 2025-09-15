import React from "react";

function MyPromises() {
  // console.log("hola munodo");

  // function fcnSumarUno(numero) {
  //   var promesa = new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       resolve(numero + 1);
  //     }, 800);
  //   });
  //   return promesa;
  // }

  // fcnSumarUno(5).then((nuevoNumero) => console.log(nuevoNumero));

  // fcnSumarUno(5)
  //   .then((nuevoNumero) => {
  //     console.log("Resultado: ", nuevoNumero);
  //     return fcnSumarUno(nuevoNumero);
  //   })
  //   .then((nuevoNumero) => {
  //     console.log("Resultado: ", nuevoNumero);
  //     return fcnSumarUno(nuevoNumero);
  //   }).then( nuevoNumero => {
  //     console.log(`Resultado: ${nuevoNumero}`)
  //   })

  // fcnSumarUno(5)
  //   .then(fcnSumarUno)
  //   .then(fcnSumarUno)
  //   .then((nuevoNumero) => {
  //     console.log(`Resultado: ${nuevoNumero}`);
  //   });

  // function potencia(base, exponente) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (typeof base !== "number" || typeof exponente !== "number") {
  //         reject("Error: Los valores deben ser números");
  //       } else {
  //         const resultado = Math.pow(base, exponente);
  //         resolve(`El resultado de ${base}^${exponente} es ${resultado}`);
  //       }
  //     }, 1000);
  //   });
  // }

  // (async () => {
  //   try {
  //     const resultado = await potencia(3, "3");
  //     console.log(`Restultado:${resultado}`);
  //   } catch (error) {
  //     console.error(`Restultado:${error}`);
  //   }
  // })();


  function fcnSumarUno(numero) {
    var promesa = new Promise(function (resolve, reject) {
      if (numero >= 7) {
        reject("El numero ya es muy alto");
      }
      setTimeout(function () {
        resolve(numero + 1);
      }, 800);
    });
    return promesa;
  }

  
  fcnSumarUno(5)
    .then(fcnSumarUno)
    .then(fcnSumarUno)
    .then((nuevoNumero) => {
      console.log("Resultado:", nuevoNumero);
    })
    .catch((error) => {
      console.log("Error en la Promesa", error);
    });
  return (
    <>
      <div>
        <h1>Programa de funciones con promesas</h1>
      </div>
    </>
  );
}

export default MyPromises;
