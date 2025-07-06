import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, User2, Mail } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -80,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full px-8 py-5 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/10 fixed top-0 z-50"
    >
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-teal-400 to-indigo-500 p-1 rounded-full">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
            🧬
          </div>
        </div>
        <span className="text-white font-bold text-lg tracking-wide">
          SriAhilesh.dev
        </span>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm text-white font-semibold">
        <li>
          <a
            href="#home"
            className="flex items-center gap-1 hover:text-cyan-400 transition"
          >
            <Sparkles className="w-4 h-4" /> Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="flex items-center gap-1 hover:text-cyan-400 transition"
          >
            <Code2 className="w-4 h-4" /> Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="flex items-center gap-1 hover:text-cyan-400 transition"
          >
            <User2 className="w-4 h-4" /> About Me
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex items-center gap-1 hover:text-cyan-400 transition"
          >
            <Mail className="w-4 h-4" /> Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;

