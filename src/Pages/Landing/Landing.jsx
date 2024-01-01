import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../Components/Nav/Nav";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import "./styles.scss";

const Landing = () => {
  const app = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.from(".landing__navbar", {
        y: -200,
        duration: 0.5,
        ease: "linear",
      });

      tl.from([".landing__title--main", ".landing__title"], {
        x: -400,
        duration: 0.5,
        ease: "linear",
      });

      tl.from(".landing__socials", {
        opacity: 0,
        duration: 1,
      });
    },
    { scope: app }
  );

  return (
    <div ref={app} className="landing">
      <div className="landing__navbar">
        <Nav />
      </div>
      <main className="landing__content">
        <h2 className="landing__title--main">Front-End</h2>
        <h3 className="landing__title">Développeur</h3>

        <div className="landing__socials">
          <Link to={"https://www.linkedin.com/in/cedricfriscia/"}>
            <GrLinkedin />
          </Link>
          <Link to={"https://github.com/CedricFriscia"}>
            <FaGithub />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Landing;
