import React from "react";

const Contact = () => (
  <section className="page-section">
    <h2>Contact</h2>
    <div className="page-container contact-center">
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:vmaadhithya@gmail.com" className="contact-link">
          vmaadhithya@gmail.com
        </a>
      </p>
      <p>
        <strong>Phone:</strong> +91 9884418759
      </p>

      <div className="socials">
        <a
          href="https://github.com/NoBoDy-Adk"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://linkedin.com/in/aadhithya-v-m"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
