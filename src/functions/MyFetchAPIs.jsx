import React from "react";

function MyFetchAPIs() {
  //   var request = new XMLHttpRequest();
  //   request.open(
  //     "GET",
  //     "https://reqres.in/api/users?api_key=reqres-free-v1",
  //     true
  //   );
  //   request.send(null);
  //   request.onreadystatechange = function (state) {
  //     if (request.readyState === 4) {
  //       const res = JSON.parse(request.response);
  //       console.log(res);
  //       console.log(res.page);
  //       console.log(res.data);
  //     }
  //   };

  function fcnFetchRequest() {
    console.log("¡Execute GET API by Fetch!");

    // fetch("https://reqres.in/api/users?api_key=reqres-free-v1")
    // .then((resp) => {
    //   resp.json()
    //   .then((respjson) => console.log("Response Fetch:", respjson));
    // });

    fetch("https://reqres.in/api/users?api_key=reqres-free-v1")
      .then((resp) => resp.json())
      .then((respObj) => {
        // console.log(respObj);
        // console.log(`Pagina ${respObj.page}`);
        // console.log(`Por página ${respObj.per_page}`);
        console.log(respObj.data);
      });
  }

  //FIC: Call local function for execute GET API
  //with Fetch Class
  fcnFetchRequest();
  return (
    <>
      <h1>Programa para FETCH APIs</h1>
    </>
  );
}

export default MyFetchAPIs;
