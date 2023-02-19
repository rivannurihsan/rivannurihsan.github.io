import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Security",
          "Blue Team",
          "SOC Analyst",
          "Web Developer",
          "Certified Incident Handler",
          "Certified Splunk Power User",
          "Certified Ethical Hacker",
          "Certified SOC Analyst",
          "Certified Digital Forensic Essential",
          "Certified Secure Computer User",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
