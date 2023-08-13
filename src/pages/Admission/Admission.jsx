import React, { useEffect } from "react";
import "./Admission.scss";
import icon1 from "../../assets/images/icon2.png";
import icon2 from "../../assets/images/icon4.png";
import icon3 from "../../assets/images/icon5.png";
import icon4 from "../../assets/images/icon3.png";
import { Tooltip } from "react-tooltip";
import bird from "../../assets/images/bird.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Adimission() {
  const navigate = useNavigate();

  return (
    <>
      <div className="topper">
        <h1>Adimission</h1>
        <div className="topper-box">
          <p onClick={() => navigate("/")} className="link">
            Home
          </p>
          <HiOutlineChevronRight className="greater" />
          <p>Adimission</p>
        </div>
      </div>

      <section className="admission-container">
        <div className="sec1-Admission">
          <h1>
            <span>Welcoming Our Children,</span> Back To Their Favorite School.
          </h1>
          <p>
            We all want to select the best preschool for our kid's primitive
            educational years and bulid a strong foundation for child's future.
          </p>

          <div className="icons-box" data-aos="fade-right">
            <img src={icon1} alt="logo" />
            <p>Sceintifically developed curriculum</p>
          </div>
          <div className="icons-box" data-aos="fade-right">
            <img src={icon2} alt="logo" />
            <p>Well Trained Teachers</p>
          </div>
          <div className="icons-box" data-aos="fade-right">
            <img src={icon3} alt="logo" />
            <p>Excellent Infrastructure</p>
          </div>
          <div className="icons-box" data-aos="fade-right">
            <img src={icon4} />
            <p>Blended Learning Approach</p>
          </div>
        </div>

        <div className="sec2-Admission" data-aos="zoom-in">
          <img src={bird} />

          <form>
            <h3>
              <span>Preschool </span>Admission Form
            </h3>
            <input
              type="input"
              className="input1"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="name is required*"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="child name is required*"
              placeholder="Child Name"
            />
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="number"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="number is required*"
              placeholder="Phone Number"
            />
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="email"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="email is required*"
              placeholder="Email"
            />
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <div className="date-input">
              <input
                type="date"
                className="input2"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="DOB is required*"
                placeholder="D . O . B"
              />
            </div>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <div className="mssg-input">
              <input
                type="text"
                className="mssgBox"
                placeholder="Enter Your Message"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </section>

      <section className="sec3-Admission">
        <h1>
          Admission Process at <span>Little Millennium Convent</span> 
        </h1>
        <p>
          The Admission process at Little Millennium is simple and
          straightforward
        </p>
        <div className="process-card" data-aos="zoom-in">
          <div>
            <h1>1</h1>
            <p>Visit our website and fill up the Preschool Admission Form</p>
          </div>
          <div>
            <h1>2</h1>
            <p>
              Our admission counsellors will get in touch to understand the
              requirement
            </p>
          </div>
          <div>
            <h1>3</h1>
            <p>
              Visit the nearest Little Millennium Preschool for a guided tour
            </p>
          </div>
          <div>
            <h1>4</h1>
            <p>
              Complete the enrolment process with assitance from our admission
              counsellors
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
