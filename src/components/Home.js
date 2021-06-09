import React, { useEffect, useRef } from "react";
import "./Home.css";
const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const p1 = ref1.current.innerText;
    let newP1 = "";
    for (const letter of p1) {
      if (letter === " ") {
        newP1 += "<span>" + letter + "</span>";
      } else {
        newP1 += "<span class='letter'>" + letter + "</span>";
      }
    }
    ref1.current.innerHTML = newP1;

    const p2 = ref2.current.innerText;
    let newP2 = "";
    for (const letter of p2) {
      newP2 += "<span class='letter'>" + letter + "</span>";
    }
    ref2.current.innerHTML = newP2;

    const p3 = ref3.current.innerText;
    let newP3 = "";
    for (const letter of p3) {
      newP3 += "<span class='letter'>" + letter + "</span>";
    }
    ref3.current.innerHTML = newP3;
  });

  return (
    <div className="home">
      <div className="home__content">
        <p ref={ref1}>Hi there</p>
        <p ref={ref2}>I am Manish Bishnoi.</p>
        <p ref={ref3}>MERN Stack Web Developer</p>
        <div className="home__btn">
          <a href="#">Resume</a>
          <a href="#contact" className="contact__btn">
            Contact
          </a>
        </div>
      </div>
      <div className="scroll"></div>
    </div>
  );
};

export default Home;
