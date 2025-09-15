import React from "react";

function MyObjects() {
  const persona = {
    nombre: "Martha",
    edad: 30,
    direccion: {
      pais: "Mexico",
      estado: "Nayarit",
      ciudad: "Tepic",
      direccion: "Conocido No. 533",
    },
  };

  console.log(`Json Person`, JSON.stringify(persona));
  return (
    <>
      <div>
        <h1>Programa de objetos literales</h1>
        <code>
            <pre>
                {JSON.stringify(persona)}
            </pre>
        </code>
      </div>
    </>
  );
}

export default MyObjects;
