import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.gif";
// import { FaFacebook } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import navbarData from "../Navbar/navbarData";
import EmailLink from "../../assets/links/EmailLink"
import PhoneLink from "../../assets/links/PhoneLink";
import FooterEnd from "./FooterEnd";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>

      <footer>
        <div className="left">
          <img src={logo} onClick={() => navigate("/")}/>
          <p>
            The <strong>Little Millenium Convent</strong> Learning Program is based on the UK Statutory
            Early Years Foundation Stage integrated with a strong STEAM based
            approach.
          </p>
          {/* <div>
            <a href="https://www.facebook.com/erudioecc" target="_blank">
              <FaFacebook className="icons" style={{ marginRight: "10px" }} />
            </a>
            <a href="https://www.instagram.com/erudioecc/" target="_blank">
              <GrInstagram className="icons" />
            </a>
          </div> */}
        </div>
        <div>
          <div className="centre flex-left">
            <h1>QUICK LINKS</h1>
            {navbarData.map((item, index) => (
              <div key={index} onClick={() => navigate(item.path)}>
                <span>
                  <BiChevronRight
                    style={{
                      fontSize: "1.2rem",
                      marginRight: "10px",
                      marginTop: "5px",
                    }}
                  />
                </span>
                <span>{item.linkName}</span>
              </div>
            ))}
          </div>
          <div className="right">
            <h1>CONTACT US</h1>
            <p>
              <span>
                <HiLocationMarker />
              </span>
              <span>
                A640 Gtb Nagar, Labour Chauraha,
                <br /> Prayagraj, Kareli, Allahabad - 211016
              </span>
            </p>
            <p>
              <span>
                <FaMobileAlt />
              </span>
              <PhoneLink />
            </p>
            <p>
              <span>
                <MdEmail />
              </span>
              <EmailLink />
            </p>
          </div>
        </div>
      </footer>
      <FooterEnd />
    </>
  );
}
