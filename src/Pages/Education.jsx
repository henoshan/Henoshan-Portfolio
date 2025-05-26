// src/Pages/Education.jsx
import React from 'react';
import uomLogo from './assets/uom.png'; // Adjust path if different

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="title">🎓 Education</h1>

      <div className="edu-card">
        <img src={uomLogo} alt="University of Moratuwa" className="edu-logo" />
        <div>
          <h2>BSc. in Engineering (Hons)</h2>
          <p className="edu-period">2021 – 2025</p>
          <p><strong>University of Moratuwa</strong></p>
          <p>Faculty of Engineering</p>
        </div>
      </div>

      <div className="edu-card secondary">
        <div className="edu-content">
          <h2>📘 Secondary Education</h2>
          <p className="edu-period">2010 – 2019</p>
          <p className="edu-stream">Stream: <strong>Physical Science</strong></p>
          <p className="edu-result">G.C.E. A/L Result: <strong>3 A's</strong></p>
          <p className="edu-school"><strong>Hartley College</strong>, Point Pedro</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
