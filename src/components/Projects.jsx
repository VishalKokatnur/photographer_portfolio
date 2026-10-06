
import React from "react";

const projects = [
   {
    number: "01",
    title: "SmartDine Pro Smart Restaurant Operations Platform",
    tech: "Python, Django, React, HTML, CSS3, APIs",
    description:
      "Full-stack restaurant and hotel management system with POS, billing, inventory, tables, and reports.",
    github:
      "https://github.com/VishalKokatnur/SmartDine_Pro_Smart_Restaurant_Operations_Platform-",
    liveDemo:
    "https://smartdinepro-frontend.onrender.com/",
  },


  {
    number: "02",
    title: "Real-Time Iris Recognition System",
    tech: "Python, Flask, OpenCV, Deep Learning",
    description:
      "Developed an AI-based iris recognition system with real-time iris detection, segmentation, and comparison using OpenCV, Flask, and Deep Learning techniques.",
    github:
      "https://github.com/VishalKokatnur/iris-multispectral-hybrid-model",
  },

  {
    number: "03",
    title: "AWS DevOps Platform",
    tech: "React, Node.js, MongoDB, Docker",
    description:
      "Built a full-stack AWS DevOps training platform with authentication, course management, enquiry modules, admin dashboard, analytics, and Docker deployment.",
    github:
      "https://github.com/VishalKokatnur/aws-devops-platform",
  },

  {
    number: "04",
    title: "Banking Management System",
    tech: "HTML, CSS, JavaScript",
    description:
      "Designed and developed a responsive banking management system with customer operations, account management, and transaction workflow features.",
    github:
      "https://github.com/VishalKokatnur/Banking-Management-System",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[5px] font-bold text-sm">
            My Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            A collection of projects showcasing my skills in Python,
            Full Stack Development, AI/ML, Cloud Technologies,
            and Modern Web Applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-3 transition-all duration-300"
            >
              {/* Project Number */}
              <div className="text-red-500 font-bold text-2xl mb-5">
                {project.number}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-5 leading-tight">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="inline-block bg-red-500/20 text-red-400 px-5 py-3 rounded-full text-sm">
                  {project.tech}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-8 text-lg">
                {project.description}
              </p>

              {/* Project Links */}
<div className="flex flex-wrap gap-3 mt-8">

  {/* GitHub */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
  >
    GitHub
    <span>→</span>
  </a>

  {/* Live Demo */}
  {project.liveDemo && (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
    >
      Live Demo
      <span>↗</span>
    </a>
  )}

</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;