import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectTabs from './ProjectTabs';
import ProjectCard from './ProjectCard';
import axios from 'axios';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('tech');
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);
  const scrollSpeed = 2;
  let scrollInterval;

  useEffect(() => {
    axios.get("http://localhost:8082/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  const startScroll = (direction) => {
    stopScroll();
    scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === 'left' ? -scrollSpeed : scrollSpeed;
      }
    }, 10);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval);
  };

  return (
    <section id="projects" className="relative py-20 px-6 bg-gray-950 text-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Explore how I've brought ideas to life through collaborative apps, AI analysis, and full-stack solutions.
        </motion.p>
      </div>

      <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hover zones */}
      <div
        className="absolute top-0 left-0 h-full w-16 z-20"
        onMouseEnter={() => startScroll('left')}
        onMouseLeave={stopScroll}
      />
      <div
        className="absolute top-0 right-0 h-full w-16 z-20"
        onMouseEnter={() => startScroll('right')}
        onMouseLeave={stopScroll}
      />

      <div
        ref={scrollRef}
        className="mt-12 flex overflow-x-auto gap-8 pb-6 px-1 scroll-smooth scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

