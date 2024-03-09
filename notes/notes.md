## virtual DOM

\*\* - virtual dom is track or trace the dom in tree like structure and the value which change cutoff and then fixed in dom again.

\*\* - createRoot is used to create dom like structure behind the scene. it compare main dom with he created dom and update the think which is update in ui.

\*\*- hook's are used to update ui on many places.

\*\*- react used fiber algorithm to behind the scene to update virtual dom.

\*\*- hydration: when web layout is create and after that when js is inject is called as hydration

\*\*- reconcilliation: it is an recursive algorithm which reconsider ki kisko update karana hain aur kisko nahi.it is algorithm behind what is popularly understood as the "virtual DOM".

\*\*- props makes component reusable.eg. suppose you make card then place it in component then you will used again and again.

---

create react app in which there is counter when we hit button one then it will increament by 1 and when we hit button two then it will decrement by 1.
import { useState } from "react"; //hook come from
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// react control ui updation
function App() {
let [counter, setCounter] = useState(5); //hook

// let counter = 5;

const addValue = () => {

<!-- // counter = counter + 1; -->
<!-- setCounter(counter + 1);   -->
<!-- here interviewer duplicate the code and asked what is happen or  what is value when you clicked on increament button-->
<!-- here the usestate send all the update in batches to ui. so it is send all counter in one batch so that's why it increment by 1. -->
<!-- setCounter(counter + 1); -->
<!-- setCounter(counter + 1); -->
<!-- setCounter(counter + 1); -->
<!-- if there is situation where you want to increase counter by 4 so you can used preCounter.
    preCounter mean last updated state of setCounter. it will increament by 4 when you cliked on increament button. -->
<!-- setCounter(prevCounter => preCounter + 1); -->

   <!-- setCounter(prevCounter => preCounter + 1); -->
   <!-- setCounter(prevCounter => preCounter + 1); -->
   <!-- setCounter(prevCounter => preCounter + 1); -->

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
