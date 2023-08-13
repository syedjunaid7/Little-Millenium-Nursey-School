import React from "react";
import "./Main.scss";
import Card from "../Cards/Card";
import Slider from "../Slider/Slider";
import kangaroo from "../../assets/images/Our-Purpose.webp";
export default function Main() {
  return (
    <>
      <section className="sec1">
        <div className="content">
          <h1 data-aos="fade-up">
            <span style={{ color: "#6d3fb1" }}>WELCOME TO</span> Little
            Millenium Convent
          </h1>
          <h3>About Little Millenium Convent</h3>
          <p className="about-para" data-aos="fade-down">
            The name <strong>Little Millenium</strong> comes from the Latin
            language and means, educate, teach and instruct.
            <strong>Little Millenium Convent</strong> school is one of the most
            prestigious school of Allahabad it has a wonderful atmosphere in a
            campus. Our school aim to be an institution of excellence, dedicated
            to prepare students for world of tomorrow.
          </p>
          <Card />
        </div>
      </section>

      <section className="sec2">
        <div className="keep-touch">
          <h1>
            KEEP IN <span>TOUCH</span>
          </h1>
          <button data-aos="zoom-in">CONTACT US</button>
        </div>
      </section>

      <section className="section-gallery">
        <h1>
          <span> See Our</span> kids Special Features & Activities !
        </h1>
        <Slider />
      </section>

      <section className="sec3">
        <div className="sec3-box">
          <div className="content">
            <h1>
              <span>Get Enrolled,</span> How to enroll your child to a class?
            </h1>
            <p>
              We are a group of teachers who really love children! We enjoy
              teaching and playing with all of our students.
            </p>
          </div>
          <div className="input-box" data-aos="zoom-in">
            <input type="text" placeholder="Full Name" />
            <input type="number" placeholder="Phone Number" />
            <button>Submit</button>
          </div>
        </div>
      </section>

      <section className="main-sec4">
        <img className="kangaroo" src={kangaroo} alt="kangaroo img" />
        <div>
          <h1><span>Our</span> Purpose</h1>
          <p>
            Our Purpose To create a learning environment that accommodates all
            individual learners providing them with opportunities to maximise
            their inherent potential. Our ultimate and cherished dream is to
            capture the latest and most innovative learning and teaching
            techniques and to introduce them successfully in India and across
            the world.
          </p>
        </div>
      </section>
    </>
  );
}
