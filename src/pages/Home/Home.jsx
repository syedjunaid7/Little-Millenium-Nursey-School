import React from "react";
import Hero from "../../Components/HeroSec/Hero";
import "./home.scss";
import Main from "../../Components/MainSec/Main";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Main/>
    </div>
  );
}
