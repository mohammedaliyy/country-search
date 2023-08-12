import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <>
      <Header />

      <Main />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
