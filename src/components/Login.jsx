import { useReducer, useEffect } from "react";

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
      break;
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "MITOKEN1234567890",
        username,
        nombre,
      };
      break;
    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        username: "Rarojasag",
        nombre: "Ramses",
      },
    });
  };
  const logout = () => {
    dispatch({
      type: "logout",
      payload: {
        username: "Rarojasag",
        nombre: "Ramses",
      },
    });
  };

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="ficAlertInfo_Div">Validando Información...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {!state.token ? (
        <div className="alert alert-danger">No Autenticado...</div>
      ) : (
        <div className="alert alert-success">
          Autenticado como {state.username}
        </div>
      )}

      {state.token ? (
        <button onClick={logout} className="btn btn-danger">
          Logout
        </button>
      ) : (
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      )}
    </>
  );
};
