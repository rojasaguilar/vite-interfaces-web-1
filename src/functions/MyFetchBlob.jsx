import React from "react";

function MyFetchBlob() {
  fetch("/imagenes/imagen1.png")
    .then((resp) => resp.blob())
    .then((image) => {
      var imgPath = URL.createObjectURL(image);
      img1.src = imgPath;
      console.log(image);
    });

  fetch("/imagenes/imagen2.png")
    .then((resp) => resp.blob())
    .then((image) => {
      var imgPath = URL.createObjectURL(image);
      img2.src = imgPath;
      console.log(image);
    });

  let img1 = document.getElementById("IdImg1");
  let img2 = document.getElementById("IdImg2");

  return (
    <>
      <h1>Programa para BLOB</h1>
    </>
  );
}

export default MyFetchBlob;
