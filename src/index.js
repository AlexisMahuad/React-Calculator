"strict-mode";
const React = require("react"),
  ReactDOM = require("react-dom");

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

ReactDOM.render(<App />, document.getElementById("app"));
