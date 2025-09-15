import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
// import MyFunctions from './functions/MyFunctions'
// import MyPromises from './functions/MyPromises'
// import MyPromisesAll from './functions/MyPromisesAll'
// import MyPromisesRace from "./functions/MyPromisesRace";
import MyFetchAPIs from "./functions/MyFetchAPIs";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises /> */}
    {/* <MyPromisesRace /> */}
    <MyFetchAPIs />
  </StrictMode>
);
