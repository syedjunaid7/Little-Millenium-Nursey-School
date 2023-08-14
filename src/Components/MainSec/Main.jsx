import React from "react";
import "./Main.scss";
import Card from "../Cards/Card";
import Slider from "../Slider/Slider";
import kangaroo from "../../assets/images/Our-Purpose.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Main() {
  const [name, setname] = useState('');
  const [number, setNumber] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (name !== '' && number !== '') {
      const email = 'info@littlemillenium.com';
      const subject = 'New Form Submission';
      const body = `Name: ${name}\nNumber: ${number}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      setname('')
      setNumber('')
      toast(" We will Reach Youu Soon !");
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+971585827919';
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <section className="sec1">
        <div className="content">
          <h1 name-aos="fade-up">
            <span style={{ color: "#6d3fb1" }}>WELCOME TO</span> Little
            Millenium Convent
          </h1>
          <p className="about-para" name-aos="fade-down">
            The name <strong>Little Millenium</strong> comes from the Latin
            language and means, educate, teach and instruct.
            <strong> Little Millenium Convent</strong> school is one of the most
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
          <button name-aos="zoom-in" onClick={handlePhoneClick}>CONTACT US</button>
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
          <form className="input-box" name-aos="zoom-in" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setname(e.target.value )}
            />
            <input
              type="number"
              placeholder="Phone Number"
              required
              value={number}
              onChange={(e) =>
                setNumber(e.target.value)
              }
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className="main-sec4">
        <img className="kangaroo" src={kangaroo} alt="kangaroo img" />
        <div>
          <h1>
            <span>Our</span> Purpose
          </h1>
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
      <ToastContainer />
    </>
  );
}
