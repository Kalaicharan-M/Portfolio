import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";

// Image as external link
const img = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZmIwMWs1cTdkMnNxcXlldGp5OHFydzBrYmRhbHpydzVycjlybTE5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HscDLzkO8EOTmgkhQP/giphy.gif";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Kalaicharan M" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher (Project-Driven)</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>
                <a className="projects-link" href="https://github.com/Kalaicharan-M?tab=repositories" target="_blank" rel="noopener noreferrer">
                  Projects
                </a>
              </h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            <b>AI & Data Science Engineer | Generative AI Enthusiast | Python Developer 🤖</b><br /><br />
            Passionate about building scalable AI systems that solve real-world problems using Machine Learning, Deep Learning, and Generative AI.
            Skilled in Python, TensorFlow, Keras, SQL, and Power BI with hands-on project experience in demand forecasting, phishing detection using 
            CNN-LSTM, legal judgment retrieval using LangChain & FAISS, and interactive HR dashboards. Strong understanding of RAG pipelines, semantic 
            search, and model evaluation techniques. Committed to continuous learning and delivering business value through AI-powered insights and tools.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
