import { useState } from "react";

function useFormulario() {
  const [formulario, setFormulario] = useState({
    email: "test@gmail.com",
    password: "123456",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return [formulario, onChange]
}

export default useFormulario;
