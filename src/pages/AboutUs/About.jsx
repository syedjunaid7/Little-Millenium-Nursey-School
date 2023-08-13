import React from "react";
import "./About.scss";
import preSchool from "../../assets/images/pre-school-activity.jpeg";
import preSchool2 from "../../assets/images/pre-school-activity-2.jpeg";
import preSchool3 from "../../assets/images/fancy dress.jpeg";

import vision from "../../assets/images/vision.png";
import mission from "../../assets/images/mission.png";
import philosphy from "../../assets/images/philosophy.png";
import infra from "../../assets/images/inra-1.jpeg";
import infra2 from "../../assets/images/infra-2.jpeg";
import { HiOutlineChevronRight } from "react-icons/hi";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import kangaroo from "../../assets/images/Our-Purpose.webp";
export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="topper">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="topper-box">
          <p onClick={() => navigate("/")} className="link">
            Home
          </p>
          <HiOutlineChevronRight className="greater" />
          <p>AboutUs</p>
        </div>
      </div>

      <section className="about-top">
        <div className="about-top-in">
          <div className="about-content">
            <h1 className="about-h1">
              <span>Little Millennium®</span> <br />
              <span style={{ fontSize: "2.5rem", color: "black" }}>
                Convent School
              </span>
            </h1>
            <p>
              The fastest-growing pre-school <br />
              chain in India.
            </p>
          </div>
          <div className="stats-box-main">
            <div className="stat-circle">
              <h2>
                <CountUp className="countUp" start={0} end={200} duration={4} />
                <span>K</span>
              </h2>
              <h1>HAPPY CHILDREN</h1>
            </div>
            <div className="stat-circle">
              <h2>
                <CountUp className="countUp" start={0} end={5} duration={4} />
                <span>K</span>
              </h2>
              <h1>CITIES</h1>
            </div>
            <div className="stat-circle">
              <h2>
                <CountUp className="countUp" start={0} end={20} duration={4} />
              </h2>
              <h1>PRESCHOOL CENTERSS</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec1">
        <div className="content-about-box-sec1">
          <h1>
            School <span>Activities</span>
          </h1>
          <p>
            At <strong>Little Millennium Convent School</strong> , the emphasis
            is on building the right foundation for the child every day through
            play activities and collaborative group work. Highly trained staff,
            premium child-friendly infrastructure, an acute focus on quality
            control and evaluation ensures a high-quality experience for
            children and their parents at our preschool. We believe that each
            child is unique and we aim to help them become happy, social and
            confident children.
          </p>
        </div>
        <div>
          <img src={preSchool} />
          <div>
            <img src={preSchool2} className="img-about-below" />
            <img src={preSchool3} className="img-about-below" />
          </div>
        </div>
      </section>

      <section className="directors-message">
        <h1>
          <span>Director's</span> Message
        </h1>
        <p>
          We're glad you've stopped by the{" "}
          <strong>Little Millennium Convent School</strong> website. Our goal is
          to make your visit user-friendly, ensuring that by the time you leave,
          you'll have a comprehensive understanding of everything we have in
          store for you.
        </p>
      </section>

      <section className="about-sec2">
        <div>
          <div>
            <img src={vision} alt="vision" />
            <h4>Vision</h4>
            <p>
              To Enable, Energise And Enhance Childhood By Fostering Growth Of
              Mind, Body And Spirit, Which Will Help Children To Become Lifelong
              Learners.
            </p>
          </div>
          <div>
            <img src={mission} alt="mission" />
            <h4>Mission</h4>
            <p>
              To Nurture Young Minds In A Culturally Appropriate Environment And
              Provide Opportunities That Will Help Them Realise Their True
              Potential.
            </p>
          </div>
          <div>
            <img src={philosphy} alt="vision" />
            <h4>Philosophy</h4>
            <p>
              To Provide Each Child With A Culturally Appropriate Environment,
              Moral Values, Love And Protection Needed For Healthy Growth Of
              Body, Mind And Spirit.
            </p>
          </div>
        </div>
      </section>

      <section className="about-sec3">
        <div>
          <h1>
            <span>School</span> Infrastructure
          </h1>
          <p>
            Every <strong>Little Millennium Convent</strong> Centre follows a
            child-centric preschool infrastructure design methodology, which
            provides a safe and hygienic environment with a crisp colourful
            ambience for their all-around growth and development. This is backed
            by quality teaching and learning aids that work together to ensure
            the all-around holistic development of each child.
          </p>
        </div>
        <div>
          <img src={infra} alt="Moving Image" />
          <img src={infra2} alt="Moving Image" />
        </div>
      </section>

      <section className="instructions">
        <h1>
          <span>Important Instructions</span> of our School
        </h1>
        <ol>
          <li>
            Students and teachers must speak english in the school premises.
          </li>
          <li>
            No visiters will be permitted to see students during class hours.
          </li>
          <li>
            Parents are expected to look into their children school diary
            regularly.
          </li>
          <li>
            In the context of an emergency, parents sending their delegate to
            collect their ward should send and authority letter with the person
            giving all the particular about the bearer.
          </li>
          <li>
            In writting to the school about your ward, please always mention his
            / her full name class and section.
          </li>
          <li>
            The daily requirement and tiffin have to be brought to the school by
            the student.
          </li>
        </ol>
      </section>
    </>
  );
}
