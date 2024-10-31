// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Parent from "./Components/Parent/Parent";

import MasterLayout from "./Components/MasterLayOut/MasterLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import NotFound from "./Components/NotFound/NotFound";
import Projects from "./Components/Projects/Projects";
import Web from "./Components/Web/Web";
import Mobile from "./Components/Mobile/Mobile";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Mohamed
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {};
  routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        // { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contacts", element: <Contacts /> },
        { path: "parent", element: <Parent /> },
        {
          path: "projects",
          element: <Projects />,
          children: [
            {index:true, element: <Web /> },
            { path: "mobile", element: <Mobile /> },
          ],
        },
      ],
      errorElement: <NotFound />,
    },
  ]);
  render() {
    return (
      <>
        <RouterProvider router={this.routes} />
      </>
    );
  }
}

export default App;
