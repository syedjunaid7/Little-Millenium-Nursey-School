import React from "react";
import "./Contact.scss";
// import InputFieldSmall from "../../components/inputFieldSmall/inputFieldSmall";
import watsappLogo from "../../assets/images/watsapp-logo.png";
import whatsappLink from "../../assets/links/whatsappLink"
import PhoneLink from "../../assets/links/PhoneLink"
import EmailLink from "../../assets/links/EmailLink";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import bird from "../../assets/images/bird.png";
import mobileImg from "../../assets/images/mobile-contact.webp";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="topper">
        <h1>Contact <span> Us</span></h1>
        <div className="topper-box">
          <p onClick={() => navigate("/")} className="link">
            Home
          </p>
          <HiOutlineChevronRight className="greater" />
          <p>Contact Us</p>
        </div>
      </div>
      <div className="contactUs-div">
        <section className="left" data-aos="fade-right">
          <h1><span>Get In touch</span> with us !</h1>
          <img src={mobileImg} />
        </section>
        
        <section className="right" data-aos="fade-up">
          <img src={bird} />
          <form>
            <h3>
            <span>Fill In The Form</span> Below, To Get In Touch !
            </h3>
            <input
              type="input"
              className="input1"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="name is required*"
              placeholder="Parent Name"
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
            <button>Enquire Now</button>
          </form>
        </section>
      </div>
      <img className="watsapp" src={watsappLogo} onClick={whatsappLink} />

      <div className="cards-box-contact" data-aos="fade-right">
        <div className="location-box">
          <div className="cards">
            <div className="icon-mod">
              <h2>
                <MdLocationPin />
              </h2>
            </div>
            <div>
              <h3>Address</h3>
              <p className="para">A640 Gtb Nagar, Labour Chauraha, Prayagraj, Kareli</p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-mod">
              <h2>
                <AiFillMail />
              </h2>
            </div>
            <div>
              <h3>Email</h3>
              <EmailLink />
            </div>
          </div>
          <div className="cards">
            <div className="icon-mod">
              <h2>
                <BsFillTelephonePlusFill />
              </h2>
            </div>
            <div>
              <h3>Phone</h3>
              <PhoneLink />
            </div>
          </div>
        </div>
        <iframe
        data-aos="fade-down"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28827.273087925554!2d81.78483586091998!3d25.4245817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535cc6eccc05d%3A0xfa385626af6ec935!2sLittle%20Millennium%20Convent%20School!5e0!3m2!1sen!2sin!4v1691494301376!5m2!1sen!2sin"
          width="700"
          height="350"
          style={{ border: "0",borderRadius : "1rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
