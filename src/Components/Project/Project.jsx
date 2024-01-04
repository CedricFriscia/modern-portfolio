import React from "react";

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
        <a
          target="_blank"
          href="https://defie-jeune.vercel.app/"
          className="project__card defi"
        ></a>

        <a
          target="_blank"
          href="https://mieu-nissa.vercel.app/"
          className="project__card nissa"
        ></a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=5RN9SH2qkLE&ab_channel=CedricFRISCIA"
          className="project__card party"
        ></a>
      </section>
    </div>
  );
};

export default Project;
