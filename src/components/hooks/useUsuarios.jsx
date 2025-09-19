import { useEffect, useState, useRef } from "react";
import reqRespApi from "../../api/reqRes";

export const useUsuarios = () => {
  const [data, setData] = useState([]);
  const refPage = useRef(1);

  useEffect(() => {
    cargaUsuarios();
  }, []);

  const cargaUsuarios = async () => {
    // reqRespApi.get("/users?api_key=reqres-free-v1").then((res) => {
    //   console.log(res.data.data);
    //   setData(res.data.data);
    //   // console.log(res.data[0]);
    // });

    await reqRespApi
      .get("/users?api_key=reqres-free-v1", {
        params: {
          page: refPage.current,
        },
      })
      .then((resp) => {
        if (resp.data.data.length > 0) {
          setData(resp.data.data);
        } else {
          alert("No hay más registros");
        }
      })
      .catch((err) => console.log(err));
  };

  const retroceder = () => {
    if (refPage.current >= 1) {
      refPage.current--;
      cargaUsuarios();
    }
  };

  const avanzar = () => {
    refPage.current++;
    cargaUsuarios();
  };

  return { data, cargaUsuarios, retroceder, avanzar, refPage };
};
