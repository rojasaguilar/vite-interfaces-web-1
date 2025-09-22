import useFormulario from "./hooks/useFormulario.jsx";

function Formularios() {
  const [formulario, onChange] = useFormulario();

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        value={formulario.email}
        name="email"
        className="form-control"
        placeholder="Email"
        onChange={(e) => onChange(e)}
      ></input>
      <input
        type="text"
        name="password"
        value={formulario.password}
        className="form-control mt-2 mb-2"
        placeholder="Password"
        onChange={(e) => onChange(e)}
      ></input>

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
}

export default Formularios;
