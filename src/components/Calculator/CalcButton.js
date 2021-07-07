import React from "react";

// Contexts
import { useCalculatorContext } from "../../context/CalculatorContext";

function CalcButton({ children }) {
  const { userInput, setUserInput, calculate } = useCalculatorContext();

  // Default key config
  let size = "size-normal",
    color = "color-normal",
    action = () => {
      if (userInput == "0" && ",+x/".indexOf(children) == -1) {
        setUserInput(children);
      } else if (
        ",+-x/".indexOf(userInput[userInput.length - 1]) == -1 ||
        ",+-x/".indexOf(children) == -1
      ) {
        setUserInput(userInput + children);
      }
    };

  // DEL key config
  if (children == "DEL") {
    color = "color-special";
    action = () => {
      if (userInput.length == 1) {
        setUserInput("0");
      } else {
        setUserInput(userInput.slice(0, userInput.length - 1));
      }
    };

    // RESET key config
  } else if (children == "RESET") {
    size = "size-double";
    color = "color-special";
    action = () => setUserInput("0");

    // "=" key config
  } else if (children == "=") {
    color = "color-equal";
    size = "size-double";
    action = () => setUserInput(calculate());
  }

  return (
    <button className={["calc-btn", size, color].join(" ")} onClick={action}>
      {children}
    </button>
  );
}

export default CalcButton;
