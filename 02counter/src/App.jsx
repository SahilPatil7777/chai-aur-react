import { useState } from "react"; //hook come from
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// react control ui updation
function App() {
  let [counter, setCounter] = useState(5); //hook

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
