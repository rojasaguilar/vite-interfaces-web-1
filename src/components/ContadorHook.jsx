import { useCounter } from "./hooks/useCounter.jsx";

function ContadorHook() {
  const { valor, acumular } = useCounter(560);
  return (
    <>
      <h1>
        Contador Hook <small>{valor}</small>
      </h1>
      <button onClick={() => acumular(1)}>Sumar (+1)</button>
      <button onClick={() => acumular(-1)}>Restar (-1)</button>
    </>
  );
}

export default ContadorHook;
