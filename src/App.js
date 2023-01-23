import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import Specialist from "./components/Specialist";
import Feedback from "./components/Feedback";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (<>
  <div className="container">
    <Navbar/>
    <Main/>
    <Services/>
    <Specialist/>
    <Feedback/>
    <Subscribe/>
    <Footer/>
  </div>
  </>
  );
}

export default App;
