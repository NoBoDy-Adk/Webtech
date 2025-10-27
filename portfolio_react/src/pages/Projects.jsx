import React from "react";

const Projects = () => {
  const project = {
    title: "Full-Stack Food Ordering Platform",
    duration: "Jul 2025 – Aug 2025 · Personal Project",
    desc: [
      "Built a full-stack web app using React (Vite), Node.js + Express.js, and MongoDB (Mongoose).",
      "Implemented JWT authentication and integrated Stripe API for secure payments.",
      "Developed an admin dashboard to manage food items, orders, and delivery statuses.",
      "Created RESTful APIs for users, carts, and orders with middleware for validation and authentication.",
      "Designed a responsive UI with streamlined cart and checkout flow for enhanced UX."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe API"],
  };

  return (
    <section className="page-section">
      <h2>Projects</h2>
      <div className="page-container">
        <h3>{project.title}</h3>
        <p className="duration">{project.duration}</p>
        <ul className="description-list">
          {project.desc.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
        <div className="tech-stack">
          {project.tech.map((t, i) => <span key={i} className="tech">{t}</span>)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
