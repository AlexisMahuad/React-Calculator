import * as React from "react";

// Css
import "./index.css";

// Contexts
import { useCalculatorContext } from "../../context/CalculatorContext";

// Components
import CalcButton from "./CalcButton";

function Calculator() {
  const { userInput, theme, setTheme } = useCalculatorContext();
  let calcOperators = "7 8 9 DEL 4 5 6 + 1 2 3 - , 0 / x".split(" ");

  return (
    <div className={"calculator theme-" + theme}>
      <div className="calc-container">
        {/* Header */}
        <div className="calc-header">
          <h2>calc</h2>
          <div className="theme-interface">
            <h4>THEME</h4>

            <div className="theme-selector">
              <div className="current-theme">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>

              <div
                className="theme-slider"
                onClick={() => {
                  setTheme(theme == 3 ? 1 : theme + 1);
                }}
              >
                <div
                  className="slider-circle"
                  style={{ left: 25 * (theme - 1) }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Visor */}
        <div className="calc-visor">
          <div>{userInput}</div>
        </div>

        {/* Keypad */}
        <div className="calc-keypad">
          <div>
            {calcOperators.map((el) => {
              return <CalcButton key={el}>{el}</CalcButton>;
            })}
          </div>
          <div>
            <CalcButton>RESET</CalcButton>
            <CalcButton>=</CalcButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
