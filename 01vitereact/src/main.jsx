import React from "react";
import ReactDOM from "react-dom/client";
// import {jsx as _jxs} from "react/jsx-dev-runtime.js"
import App from "./App.jsx";

// you can create function here also but it is not good syntax
// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   );
// }

// create react element, it will not work because it is not as per react
// const ReactElement = {
// type: "a",
// props: {
// href: "https://google.com",
// target: "_blank",
// },
// children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const anotherUser = " Chai aur react";
// create custom react element as per react
// instead of create React.createElement you can do with jsx but it's code is quite difficult
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp() // after all react is also js so you can execute function like this\
  // <reactElement/> not working
  reactElement
  // anotherElement; // you can execute this also
  // <App />
);
