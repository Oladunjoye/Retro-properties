import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import StoryContent from "./components/StoryContent";
import StoryPicture from "./components/StoryPicture";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Homes from "./components/Homes";

function App() {
  return (
    <div className="container">
      <Main />
      <Sidebar />
      <Realtors />
      <Features />
      <StoryPicture />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
