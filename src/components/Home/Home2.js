import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logofull.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with  IT security, full-stack web development and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I have more than one year experient in cyber security as SOC Analyst, with some certificate like
              <i>
                <b className="purple"> Splunk Core Certified Power User | Certified Ethical Hacking (CEH) | Certified Incident Handler (ECIH) | Certified SOC Analyst (CSA) | Digital Forensics Essentials (DFE) | Certified Secure Computer User. </b>
              </i>
              <br />
              <br />
              I am a Tier One SOC Analyst with extensive experience in the field of IT security. In my current role, I work on two exciting projects for a prominent policy-making institution and a leading state-owned enterprise in the industry sector. To ensure that our clients' assets are protected, I use advanced tools such as
              <b className="purple"> SPLUNK and SOAR Phantom</b> to monitor cyber-attack activities. My responsibilities include creating rules, tuning existing rules, and developing reports on a weekly and monthly basis to stay ahead of potential threats.
              <br /><br />
              Aside from my work as a SOC Analyst, I am also an experienced web developer with over 2 years of experience. Throughout my career, I have had the opportunity to work on several exciting projects, including
              <b className="purple"> backend development for the animo website in the F&B industry, website development for PT Anugerah Pratama Lazuardi in the property sector, and website development for MyOasis in the research field at Telkom Indonesia.</b>
              As a web developer, I am passionate about creating functional and user-friendly platforms that deliver an exceptional user experience. I have experience working with a range of web development technologies, including
              <b className="purple"> Vue JS, React JS, Laravel, CI framework, etc</b>
              <br /><br />
              In conclusion, I am currently working as a SOC Analyst, utilizing advanced tools such as
              <b className="purple"> SPLUNK and SOAR Phantom to monitor cyber-attack activities and protect our clients' assets. </b>
              My day-to-day responsibilities include
              <b className="purple"> creating and tuning rules, developing reports, creating playbooks for SOAR, developing interactive dashboards, and conducting research on malware. </b>
              Through my work, I am dedicated to ensuring the safety and security of my clients' assets in an ever-evolving threat landscape.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rivannurihsan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rivannurihsan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
