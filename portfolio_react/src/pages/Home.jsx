import React from "react";
import aadhi from "../assets/aadhi.jpg";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="hero page-section">
    <div className="page-container" style={{ textAlign: "center" }}>
      <img src={aadhi} alt="Aadhithya V M" className="profile-img" />
      <h1>
        Hi, I’m <span>Aadhithya V M</span>
      </h1>
      <p>B.Tech CSE (IoT) Student | IoT Developer | Full-Stack Learner</p>
      <Link to="/projects" className="btn">View My Work</Link>
    </div>
  </section>
);

export default Home;
