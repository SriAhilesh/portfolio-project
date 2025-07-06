import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white text-center"
    >
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-6">Let's Connect</h2>

      {/* Message for HR */}
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
        I’m currently open to Job or internship opportunities where I can bring impactful solutions,
        collaborate with talented teams, and grow as a developer. If you're a hiring manager
        or recruiter, I’d love to hear from you!
      </p>

      {/* Call to Action */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a
          href="mailto:sriahileshn@gmail.com"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          📩 Connect with Me
        </a>

        {/* Resume Download Button */}
        <a
          href="/ahilresume.pdf"
          download
          className="inline-block border border-white text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          ⬇️ Download Resume
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap">
        <a
          href="https://linkedin.com/in/sri-ahilesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 text-2xl transition"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/SriAhilesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 text-2xl transition"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://x.com/SriAhilesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 text-2xl transition"
          title="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com/_srriii_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 text-2xl transition"
          title="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="mailto:sriahileshn@gmail.com"
          className="text-gray-300 hover:text-indigo-400 text-2xl transition"
          title="Mail"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

