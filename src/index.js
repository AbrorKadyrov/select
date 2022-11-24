import React from "react";
import ReactDOM from "react-dom/client";
import { Store } from "./context";
import { Root } from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store>
      <Root />
    </Store>
  </React.StrictMode>
);
