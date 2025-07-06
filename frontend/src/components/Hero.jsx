import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
//import Avatar from "@/assets/avatar.png"; // You can replace this path with the actual avatar location

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative h-screen flex flex-col justify-start items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden"
      >
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 -z-10"
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: 30 },
              color: { value: ["#00FFFF", "#7FFF00", "#FF1493"] },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
              },
              opacity: {
                value: 0.2,
                anim: { enable: true, speed: 0.3, opacity_min: 0.05 },
              },
              size: { value: 4, random: true },
              move: {
                enable: true,
                speed: 1.2,
                outModes: { default: "out" },
              },
              links: {
                enable: true,
                distance: 130,
                color: "#ffffff",
                opacity: 0.1,
                width: 1,
              },
            },
          }}
        />

        {/* Floating Avatar Circle with Light Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="relative mt-32 mb-6"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-xl flex items-center justify-center relative animate-bounce-slow overflow-hidden">
           
            <img
              src="https://cdn-icons-png.flaticon.com/512/4335/4335624.png"
              alt="Male Developer Avatar"
              className="w-28 h-28 rounded-full object-cover z-10"
            />

            <div className="absolute -inset-1 rounded-full border-4 border-indigo-500/30 animate-spin-slow" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-700/30 to-blue-500/30 blur-2xl animate-pulse" />
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-indigo-400 mb-4"
        >
          Hey, I'm Sri Ahilesh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl max-w-2xl text-gray-300 mb-6"
        >
          "Code is poetry, and I write stories that shape the future."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg max-w-3xl text-gray-400 leading-relaxed mb-8"
        >
          a Computer Science student with a deep interest in full-stack development and emerging DevOps practices.
          From crafting sleek UIs to engineering powerful backends, I'm driven by a relentless curiosity for innovation and a dedication to delivering impactful solutions. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { name: "MySql", icon: "🗄️" },
            { name: "React", icon: "⚛️" },
            { name: "Frontend", icon: "💻" },
            { name: "Figma", icon: "🎨" },
            { name: "Mongodb", icon: "🍃" },
            { name: "Springboot", icon: "🌱" },
            { name: "Node js", icon: "🟢" },
          ].map((tech) => (
            <span
              key={tech.name}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition flex items-center gap-2"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex gap-6"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-cyan-400 hover:bg-cyan-400 text-cyan-300 hover:text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Let's Connect
          </a>
        </motion.div>
      </section>
      

      <Projects/>
      {/* Light pulse separator (short like a shining star) */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-pulse" />

      <AboutMe />

      {/* Light pulse separator (short like a shining star) */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-pulse" />

      <Contact />
    </>
  );
};

export default Hero;

