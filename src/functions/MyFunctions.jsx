import React from "react";

function MyFunctions() {
  console.log("Programa de funciones");

  function fncSumarUno(numero, fncResultadoCallBack) {
    setTimeout(() => {
      fncResultadoCallBack(numero + 1);
    }, 3000);
  }

  //CALLBACK HELL
  fncSumarUno(5, (nuevo) => {
    fncSumarUno(nuevo, (nuevo2) => {
      fncSumarUno(nuevo2, (nuevo3) => console.log(`Resultado: ${nuevo3}`));
    });
  });

//   console.log(resultado);
  return (
    <>
      <div>
        <h1>Programa de funciones</h1>
      </div>
    </>
  );
}

export default MyFunctions;
