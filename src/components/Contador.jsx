import { useState } from "react";

function Contador() {
    const [valor, setValor] = useState(1);

    const acumular = (numero) => setValor(valor + numero) 
  return (
    <>
      <h1>Aprender useState</h1>
      <h1>
        Contador <small>{valor}</small>
      </h1>
      <button onClick={()=> acumular(1)}>Sumar (+1)</button>
      <button onClick={() => acumular(-1)}>Restar (-1)</button>
    </>
  );
}

export default Contador;
