import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="container">
      <Main />
      <Sidebar />
      <Realtors />
      <Features />
      <Story />
      <Gallery />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
