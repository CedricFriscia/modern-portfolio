import React from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./project.scss";

const Project = () => {
  const app = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.from(".project__card", {
        opacity: 0,
        stagger: 0.5,
        duration: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: ".project__card",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.from(".project__title", {
        opacity: 0,

        ease: "linear",
        scrollTrigger: {
          trigger: ".project__title",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    },
    { scope: app }
  );

  return (
    <div ref={app} className="project">
      <h1 className="project__title">PROJETS</h1>
      <section className="project__container">
        <Link to={"https://defie-jeune.vercel.app/"} target={"_blank"}>
          <img
            className="project__card"
            src="project/Capture d'écran 2024-01-03 091948.png"
            alt=""
          />
        </Link>
        <Link to={"https://mieu-nissa.vercel.app/"} target={"_blank"}>
          <img
            className="project__card"
            src="project/Capture d'écran 2024-01-02 215758.png"
            alt=""
          />
        </Link>
        <Link
          to={
            "https://www.youtube.com/watch?v=5RN9SH2qkLE&ab_channel=CedricFRISCIA"
          }
          target={"_blank"}
        >
          <img className="project__card" src="project/party.png" alt="" />
        </Link>
      </section>
    </div>
  );
};

export default Project;
