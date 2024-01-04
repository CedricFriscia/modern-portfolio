import React from "react";

import gsap from "gsap";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import "./styles.scss";

const Card = () => {
  const cardRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.from(
        [
          ".card__container",
          ".card__title",
          ".card__presentation",
          ".card__skills",
        ],
        {
          opacity: 0,
          ease: "linear",
          duration: 1,
          delay: 1.8,
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <div ref={cardRef} className="card">
      <div className="card__container">
        <h2 className="card__title">Parcour</h2>
        <p className="card__presentation">
          Formation Fullstack BAC +2 : J'ai acquis de solides compétences en
          JavaScript, Node.js, CSS, l'utilisation d'animations avec GSAP et le
          framework React.
        </p>
        <h2 className="card__title">Compétences</h2>
        <div className="card__skills">
          <img
            src="icons/kisspng-responsive-web-design-html-world-wide-web-consorti-5ae60d381c26f6.3859365115250261041153.png"
            alt=""
          />

          <img
            src="icons/kisspng-css3-cascading-style-sheets-computer-icons-html-emblem-5ac245f107ae31.3014101515226813290315.png"
            alt=""
          />

          <img
            src="icons/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png"
            alt=""
          />

          <img
            src="icons/kisspng-git-computer-icons-software-repository-software-de-price-tag-5ad04273211b63.7402327815235979391356.png"
            alt=""
          />

          <img
            src="icons/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png"
            alt=""
          />
          <img
            src="icons/kisspng-javascript-logo-html-comment-blog-5ae63c23139110.5436874015250381150802.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
