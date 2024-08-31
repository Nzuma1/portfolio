import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/UI/Hero.jsx";
import Services from "./components/UI/Services.jsx";
import Portfolio from "./components/UI/Portfolio.jsx";
import Contact from "./components/UI/Contact.jsx";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
