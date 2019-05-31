import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner />
        <Footer />
      </>
    );
  }
}

export default App;
