import React from 'react';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Builtprojects from "./components/builtprojects/Builtprojects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Builtprojects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App