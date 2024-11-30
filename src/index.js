

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Illicit from "./Illicit"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
        <App />
        <Illicit/>
  </StrictMode>
);



/* 
import ColorToggle from './ColorToggle';

const Home = () => {


    return (
        <div>
            <h1>Color Toggle Exemple</h1>
            <ColorToggle/>
        </div>
    )
}

export default Home;
*/