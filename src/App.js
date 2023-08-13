import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Adimission from "./pages/Admission/Admission";
import Contact from "./pages/Contact/Contact";
import watsappLogo from "./assets/images/watsapp-logo.png";
import whatsappLink from "./assets/links/whatsappLink";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Adimission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <img className="watsapp" src={watsappLogo} onClick={whatsappLink} />
    </div>
  );
}

export default App;
