import { motion } from "framer-motion";
import { useRef } from "react";
import Typical from "react-typical";

const AboutMe = () => {
  const containerRef = useRef(null);

  const highlights = [
    {
      title: "🏆 Top 10 in Designathon",
      description:
        "Ranked among the top 10 in a Designathon for creative UI/UX skills.",
    },
    {
      title: "💼 Intern @ Orange People (OP)",
      description:
        "Currently interning as a Software Developer at Orange People (OP), contributing to scalable web applications.",
    },
    {
      title: "🎯 Mission-Driven",
      description:
        "Dedicated to creating high-impact solutions through design and development that matter.",
    },
    {
      title: "🔆 Senior Core Member - SESI VIT",
      description:
        "Serving as a senior core member in the Solar Energy Society of India (SESI) chapter, driving awareness and innovation in sustainable energy.",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 bg-gray-950 text-white overflow-hidden">
      {/* Animated heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Typing intro */}
      <motion.div
        className="text-center text-lg md:text-xl text-cyan-400 font-mono mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Typical
          steps={[
            "Hi, I'm Sri 👋", 2000,
	"DevOps & Fullstack Engineer 💻", 2500,
	"CI/CD | Docker | Jenkins 💥", 2500,
	"Graphic Designer 🚀", 2500
          ]}
          loop={Infinity}
          wrapper="span"
        />
      </motion.div>

      {/* Horizontal scroll cards */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // smooth and slow
          }}
        >
          {[...Array(2)].flatMap((_, loopIndex) =>
            highlights.map((item, index) => (
              <motion.div
                key={`${loopIndex}-${index}`}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md border border-white/10 text-left min-w-[320px] max-w-[360px] hover:shadow-cyan-500/20 transition-shadow"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      {/* Blurred glowing dot in background */}
      <motion.div
        className="absolute top-16 right-10 w-40 h-40 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0"
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </section>
  );
};

export default AboutMe;

