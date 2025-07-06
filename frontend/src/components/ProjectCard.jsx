import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="min-w-[350px] max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 flex flex-col justify-between scroll-snap-align-start"
    >
      {/* Image Section */}
      <div className="mb-4 overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-teal-400 hover:text-teal-300 transition"
        >
          View Live <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

