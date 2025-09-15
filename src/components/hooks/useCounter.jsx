import { useState } from "react";
//ASIGNAR UN PARÁMETRO POR DEFECTO QUE SE PUEDE CAMBIAR
export const useCounter = (numeroInicial = 10) => {
  const [valor, setValor] = useState(numeroInicial);

  const acumular = (numero) => setValor(valor + numero);

  return {
    valor,
    acumular,
  };
};
