import { useUsuarios } from "./hooks/useUsuarios";

function Usuarios() {
  const { data, avanzar, retroceder } = useUsuarios();

  return (
    <>
      <h1>Introducción a Javascript with React</h1>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        {data.map((person) => (
          <tr>
            <td>
              {
                <img
                  src={person.avatar}
                  alt=""
                  style={{ borderRadius: "100%", width: "5rem" }}
                />
              }
            </td>
            <td>{person.first_name}</td>
            <td>{person.email}</td>
          </tr>
        ))}
      </table>
      <button onClick={avanzar} className="btn btn-primary">
        Siguiente
      </button>
      <button onClick={retroceder} className="btn btn-secondary">
        Atras
      </button>
    </>
  );
}

export default Usuarios;
