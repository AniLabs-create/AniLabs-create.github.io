import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import { Carousel } from "react-bootstrap";

const spotlightProjects = {
  Refract: {
    title: "refract",
    desc: "A fan-made index of 275+ anime & manga sources across 15 categories — streaming, readers, music, trackers and more. Direct links only, no redirects.",
    techStack: "HTML, CSS, JAVASCRIPT",
    link: "https://github.com/AniLabs-create",
    open: "https://refractalt.netlify.app",
    image: "/assets/refractalt.png",
  },
  BuildLog: {
    title: "buildlog",
    desc: "A developer building platform — log what you build and learn in 1-minute daily entries, keep automated build streaks, and share shareable proof of growth.",
    techStack: "TYPESCRIPT, REACT",
    link: "https://github.com/AniLabs-create/BuildLog",
    open: "https://buiildlogg.netlify.app",
    image: "/assets/buildlog.png",
  },
  "Pixel Music Player": {
    title: "pixel music player",
    desc: "A cute, cozy desktop music player built with Electron — pixel-art album covers, frameless custom window chrome, and a warm lo-fi vibe.",
    techStack: "ELECTRON, JAVASCRIPT, CSS",
    link: "https://github.com/AniLabs-create/Pixcel-player",
    image: "/assets/pixelplayer.png",
  },
};

const projects = {
  "Neural-Controlled Drone": {
    desc: "My major project — a drone controlled by neural signals, mapping brain-computer interface input into real flight commands. Currently in active development.",
    techStack: "Python, AI/ML, Embedded Systems",
    link: "https://github.com/AniLabs-create",
  },
  SafetyAI: {
    desc: "A machine learning system that classifies operational safety reports into Low, Medium, or High risk — with a Streamlit app that shows risk level, confidence, and recommended action.",
    techStack: "Python, Scikit-learn, Streamlit",
    link: "https://github.com/AniLabs-create/SafetyAI",
  },
  "Ultorn Voice Agent": {
    desc: "An AI voice assistant built on a clean processor-pipeline architecture, currently chatting via a Groq-hosted LLM — with a roadmap to full speech, memory, and tool calling.",
    techStack: "Python, Groq API",
    link: "https://github.com/AniLabs-create/voice-agent",
  },
  "College Event Tracker": {
    desc: "A full-stack app to browse upcoming college events, create new ones, and register — backed by a Flask API and a SQLite database.",
    techStack: "Python (Flask), SQLite, JavaScript",
    link: "https://github.com/AniLabs-create/college_event_tracker",
  },
  "Virtual Mouse": {
    desc: "A computer-vision tool that turns your webcam into an input device — tracing your fingertips to move and control the mouse cursor hands-free.",
    techStack: "Python, Computer Vision",
    link: "https://github.com/AniLabs-create/virtual-mouse-with-finger-tracing",
  },
  "Knowledge Vault": {
    desc: "A personal vault for collecting and organizing knowledge — articles, videos, courses and ideas with notes. Search, category filters, pinning, and JSON export/import, all stored locally in your browser. No database, no expiry.",
    techStack: "React.js, Vite, localStorage",
    link: "https://github.com/AniLabs-create/knowledge-vault",
  },
  "This Portfolio": {
    desc: "My personal portfolio, adapted from an open-source design and rebuilt from the ground up with React and Vite — ASCII portrait and all.",
    techStack: "React.js, Vite, Material UI, Bootstrap",
    link: "https://github.com/AniLabs-create",
    open: "https://anilabs-create.github.io",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title"><span className="section-number">03.</span>software</span>
        <a
          href="https://github.com/AniLabs-create"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div>
                  {spotlightProjects[key]["desc"]}
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </div>

              <a
                href={
                  spotlightProjects[key]["open"] ||
                  spotlightProjects[key]["link"]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key]["title"]}
                </div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
