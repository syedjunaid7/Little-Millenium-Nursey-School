import React, { useEffect } from "react";
import "./Hero.scss";
import girl from "../../assets/images/hang-girl.png";
import kids from "../../assets/images/school-kids.png";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <div className="main-container">
      <section className="hero-main">
        <div className="hero-box">
          <img className="girl" src={girl} alt="girl-img" data-aos="fade-right" />
          <div className="content-hero">
            <h1><span>Children Education</span> Reimagined</h1>
            <p className="hero-para">
              Let the Child be the director, and the actor in his own play
            </p>
            <div className="count1">
              <div className="count-its-div">
              <div>
                <span>
                  <CountUp
                    className="countUp"
                    start={0}
                    end={200}
                    duration={4}
                  />
                  <span className="countUp">+</span>
                </span>
                <p>
                  <strong>Students</strong> Enrolled
                </p>
              </div>
              <div>
                <span>
                  <CountUp
                    className="countUp"
                    start={0}
                    end={50}
                    duration={4}
                  />
                  <span className="countUp">+</span>
                </span>
                <p>
                  <strong>Increasing</strong> Programs
                </p>
              </div>
              </div>
              <img src={kids} alt="img" data-aos="fade-down" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
