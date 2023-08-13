import React, { useEffect, useState } from "react";
import "./Admission.scss";
import icon1 from "../../assets/images/icon2.png";
import icon2 from "../../assets/images/icon4.png";
import icon3 from "../../assets/images/icon5.png";
import icon4 from "../../assets/images/icon3.png";
import bird from "../../assets/images/bird.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Adimission() {
  const navigate = useNavigate();
  const [fName, setFname] = useState("");
  const [cName, setCname] = useState("");
  const [pNumber, setpNumber] = useState("");
  const [eMail, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fName !== "" || cName !== "" || pNumber !== "" || eMail !== "") {
      toast(" We will Reach Youu Soon !");
      setFname("");
      setCname("");
      setpNumber("");
      setEmail("");
     
    }
  };
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
          <form onSubmit={handleSubmit}>
            <h3>
              <span>Preschool </span>Admission Form
            </h3>
            <input
              type="input"
              className="input1"
              placeholder="Full Name"
              required
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Child Name"
              required
              value={cName}
              onChange={(e) => setCname(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              required
              value={pNumber}
              onChange={(e) => setpNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={eMail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="date-input">
              <input
                type="date"
                placeholder="D . O . B"
                // required
                // value={admissionData}
                // onChange={(e) => setAdmissionData(e.target.value)}
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
      <ToastContainer />

    </>
  );
}
