import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// create router
//  Create and render a browser router in main.jsx
// createBrowserRouter is method that come from react-router-dom and it has array
// const router = createBrowserRouter([
// {
// path: "/",
// element: <Layout />,
// children: [
// {
// path: "",
// element: <Home />,
// },
// {
// path: "about",
// element: <About />,
// },
// {
// path: "contact",
// element: <Contact />,
// },
// ],
// },
// ]);

// Other way
// loader: when you want to fetch data from api then it help to directly call api from there.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> here we do not render app because we insert react router 
    RouterProvider component is take one prop if it don't take prop then it will not work. we need to create router prop*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);
