import React from "react";
import Hero from "../../Components/HeroSec/Hero";
import "./home.scss";
import Main from "../../Components/MainSec/Main";
import watsappLogo from "../../assets/images/watsapp-logo.png";
import whatsappLink from "../../assets/links/whatsappLink";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Main/>
      <img className="watsapp" src={watsappLogo} onClick={whatsappLink} />
    </div>
  );
}
