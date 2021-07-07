import React, { useState, useContext } from "react";

const calculatorContext = React.createContext();

function CalculatorProvider({ children }) {
  const [userInput, setUserInput] = useState("0");
  const [theme, setTheme] = useState(1);

  function remove(arr, i) {
    return arr.slice(0, i).concat(arr.slice(i + 1));
  }

  function calculate() {
    let data = userInput;
    for (let el of ["+", "-", "/", "x"]) {
      data = data.replace(el, ` ${el} `);
    }
    data = data.replace(",", ".");
    data = data.split(" ");

    if (data[0] == "" && data[1] == "-") {
      data = remove(data, 0);
      data = remove(data, 0);
      data[0] = -Number(data[0]);
    }

    for (let el of ["x", "/", "+", "-"]) {
      let i = data.indexOf(el);

      while (i != -1) {
        data[i - 1] = Number(data[i - 1]);
        data[i + 1] = Number(data[i + 1]);

        // ==> X
        if (el == "x") {
          data[i] = data[i - 1] * data[i + 1];

          // ==> /
        } else if (el == "/") {
          data[i] = data[i - 1] / data[i + 1];

          // ==> +
        } else if (el == "+") {
          data[i] = data[i - 1] + data[i + 1];

          // ==> -
        } else {
          data[i] = data[i - 1] - data[i + 1];
        }

        data = remove(data, i - 1);
        data = remove(data, i);
        i = data.indexOf(el);
      }
    }
    return String(data).replace(".", ",");
  }

  return (
    <calculatorContext.Provider
      value={{ userInput, setUserInput, theme, setTheme, calculate }}
    >
      {children}
    </calculatorContext.Provider>
  );
}

export const useCalculatorContext = () => {
  return useContext(calculatorContext);
};

export { calculatorContext, CalculatorProvider };
