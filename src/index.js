import * as React from "react";
import { render } from "react-dom";

import "./public/css/index.css";

// Contexts
import { CalculatorProvider } from "./context/CalculatorContext";

// Components
const Calculator = React.lazy(() =>
  import("./components/Calculator/Calculator")
);

function App() {
  return (
    <CalculatorProvider>
      <React.Suspense fallback={<div className="loading">Loading</div>}>
        <Calculator />
      </React.Suspense>
    </CalculatorProvider>
  );
}

render(<App />, document.getElementById("app"));
