import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../Components/Nav/Nav";
import Card from "../../Components/Card/Card";
import Project from "../../Components/Project/Project";

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
        y: -300,
        duration: 0.5,
        ease: "linear",
      });

      tl.from([".landing__title--main", ".landing__title"], {
        x: -600,
        duration: 0.5,
        ease: "linear",
        stagger: 0.3,
      });

      tl.from(".fade", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
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

        <div className="landing__socials fade">
          <Link
            to={"https://www.linkedin.com/in/cedricfriscia/"}
            className="link"
            target={"_blank"}
          >
            <GrLinkedin />
          </Link>
          <Link
            to={"https://github.com/CedricFriscia"}
            className="link"
            target={"_blank"}
          >
            <FaGithub />
          </Link>
        </div>
        <p className="landing__introduction fade">
          Bonjour, je m'appelle Cédric, j'ai 25 ans et je suis un développeur
          passionné par le développement web.
        </p>

        <section className="landing__card">
          <Card />
        </section>
        <section className="landing__projects">
          <Project />
        </section>
      </main>
    </div>
  );
};

export default Landing;
