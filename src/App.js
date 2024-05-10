import { useEffect, useState } from "react";
import styles from "./App.module.css";

function Button({ value, setValue, setEqual, setOutput }) {
  function handleClick() {
    if (value === "=") {
      setEqual(true);
    } else if (value === "C") {
      setValue("");
      setOutput(0);
      return;
    } else {
      setValue((prev) => prev + value);
      setEqual(false);
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {value}
    </button>
  );
}

function App() {
  const [value, setValue] = useState("");
  const [equal, setEqual] = useState(false);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    if (equal) {
      try {
        setOutput(eval(value).toString());
      } catch (error) {
        setOutput("Error");
      }
    } else {
      setOutput(0);
    }
  }, [equal, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>React Calculator</h1>

      <input type="text" name="" id="" value={value} onChange={handleChange} />

      <div className={styles.valueContainer}>
        <h2>{output}</h2>
      </div>

      <div className={styles.buttonContainer}>
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((num) => (
          <Button
            key={num}
            value={num}
            setValue={setValue}
            setEqual={setEqual}
            setOutput={setOutput}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
