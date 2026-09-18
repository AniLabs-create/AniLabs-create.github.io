import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am a first-year <b>Computer Science &amp; Engineering</b> student at{" "}
      <a href="https://manipal.edu/mit.html">MIT Bengaluru</a>, learning by
      building — from full-stack web apps to machine learning models. I am
      currently working on my major project: a{" "}
      <b>neural-controlled drone</b>.
    </p>
  );
  const two = (
    <p>
      Back in class 8, I taught Python to two students from Indiana, USA — my
      first experience sharing code with the world. I'm also a published
      author: two books on Amazon and an ongoing webnovel on RoyalRoad. I
      only started LeetCode recently, since I was more focused on building
      projects first — but I'm solving regularly now.
    </p>
  );

  const techStack = [
    "Python",
    "C++",
    "MERN Stack",
    "Flutter",
    "AI / ML",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title"><span className="section-number">01.</span>about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Nizamuddin" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
