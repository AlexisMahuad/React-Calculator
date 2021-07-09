import * as React from "react";
import { render } from "react-dom";

import "./public/css/index.css";

// Contexts
import { CalculatorProvider } from "./context/CalculatorContext";

// Components
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}

render(<App />, document.getElementById("app"));
