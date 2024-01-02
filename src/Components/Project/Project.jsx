import React from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import "./project.scss";

const Project = () => {
  const app = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(".project__card", {
        scrollTrigger: ".project__card",
      });
    },
    { scope: app }
  );

  return (
    <div ref={app} className="project">
      <h1 className="project__title">PROJETS</h1>
      <section className="project__container">
        <div className="project__card defi"></div>

        <div className="project__card nissa"></div>
      </section>
    </div>
  );
};

export default Project;
