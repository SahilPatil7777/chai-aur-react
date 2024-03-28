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

- React router Dom: it is not essential core part of react. it is an third party liabrary.

- props drelling(props inside props): props dealing means if there is dashboard and in that there is left and right navigation bar and in right side navbar there is two portition and in first portition there is card and in that card you want to display the username and username is there in <app username = "chai" /> then data will to <dashboard username="chai"/> then it will go to right side navbar <rightnavbar username="chai"/> then it will go to <topcomp username = "chai"/> then finally it will go to card <Card username="chai"/>.
  -Instead doing this if we declare global file and in that there is <title :"chai"/> then we direct associated card with this global file. so now there is no need to pass data from <app username = "chai" /> --><dashboard username="chai"/> --><topcomp username = "chai"/> --><Card username="chai"/>.
- One more approach is to if <app /> is directly passes data to global file and then it will pass to card.
- so making global file we have lot's of adv. there is no need of props inside props.

- context API: then context api is available.it's purely associated with react and it is not exist outside react.but the problem is not only about react there is more thing which solve this problem.and that is called Redux.

- Redux: it is used for state management. means data passess from one place to another place that is manage in organized way.
- redux is an independent liabrary. To giving connenction to redux it gives react-redux.

- Redux-toolkit: it is batteries included means no need to set of lot of things it give simple flow and it handle lot of things internally like it has more abstraction, it has easy way of making store.

- concept in redux and redux-toolkit

  - store: it is like global variable from where we take the things.
  - reducer: when you want to make change in store reducer is used.
  - methods:
    - useSelector: it select values from store.
    - useDispatch: when you want to send value from store useDispatch is used.

- state Management Liabray:
- Redux-toolkit(RTK)
- zustand
