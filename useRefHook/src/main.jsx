import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RefIsLocalToEachComponent from "./components/refIsLocalToEachComponent.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  // <App />
  <>
    <RefIsLocalToEachComponent name={"first"} />{" "}
    {/*name prop is passed to just log which btn was clicked */}
    <RefIsLocalToEachComponent name={"second"} />
  </>,
  //</StrictMode>,
);
