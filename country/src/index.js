import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Example from "./Example";

function App() {
  return (
    <div className="he">
      <Example />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
