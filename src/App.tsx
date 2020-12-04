import React from "react";
import Header from "./Components/Header";
import Starter from "./Components/Starter";
import Form from "./Components/Form";
import Links from "./Components/Links";
import Statistics from "./Components/Statistics";
import Basement from "./Components/Basement";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="App-top">
        <div className="container">
          <Header />
          <Starter />
        </div>
      </div>
      <div className="App-main">
        <div className="container">
          <Form />
          <Links />
          <Statistics />
        </div>
      </div>
      <Basement />
      <Footer />
    </>
  );
}

export default App;
