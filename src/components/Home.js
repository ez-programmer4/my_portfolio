import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Decorative Wave SVG (Enhanced)
const WaveSVG = () => (
  <motion.svg
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: 0,
    }}
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 0.6, y: 0 }}
    transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
    whileInView={{
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity },
    }} // Subtle wave motion
  >
    <path
      fill="url(#waveGradient)"
      fillOpacity="1"
      d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,192C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#34c759", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Enhanced Code Particle SVG
const CodeParticleSVG = ({ style }) => (
  <motion.svg
    style={{ position: "absolute", width: "100px", zIndex: 0, ...style }}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.7, scale: 1 }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
    whileHover={{ scale: 1.2, rotate: 10, opacity: 1 }}
  >
    <path
      d="M10 20 L20 30 L10 40 M25 20 L35 30 L25 40"
      stroke="#00d4ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="10 5"
    />
  </motion.svg>
);

// Enhanced Binary Code SVG
const BinarySVG = ({ style }) => (
  <motion.svg
    style={{ position: "absolute", width: "150px", zIndex: 0, ...style }}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 0.6, y: 0 }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
    whileInView={{ opacity: 0.8 }}
  >
    <text x="10" y="20" fill="#00d4ff" fontSize="16" fontFamily="monospace">
      0101
    </text>
    <text x="10" y="40" fill="#00d4ff" fontSize="16" fontFamily="monospace">
      1010
    </text>
    <text x="10" y="60" fill="#00d4ff" fontSize="16" fontFamily="monospace">
      1100
    </text>
    <text x="10" y="80" fill="#00d4ff" fontSize="16" fontFamily="monospace">
      0011
    </text>
  </motion.svg>
);

// Enhanced Circuit Pattern SVG
const CircuitSVG = ({ style }) => (
  <motion.svg
    style={{ position: "absolute", width: "200px", zIndex: 0, ...style }}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ duration: 2.5, ease: "easeOut", delay: 0.8 }}
    whileHover={{ opacity: 0.8, scale: 1.1 }}
  >
    <path
      d="M10 50 H30 V30 H50 V50 H70 V30 H90 M10 70 H40 V90 H60 V70 H90"
      stroke="url(#circuitGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#ff007a", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Enhanced Code Snippet SVG
const CodeSnippetSVG = ({ style }) => (
  <motion.svg
    style={{ position: "absolute", width: "250px", zIndex: 0, ...style }}
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 0.6, x: 0 }}
    transition={{
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
    whileHover={{ opacity: 1, scale: 1.05 }}
  >
    <rect x="0" y="0" width="200" height="100" fill="rgba(0,0,0,0.4)" rx="5" />
    <text x="10" y="20" fill="#00d4ff" fontSize="12" fontFamily="monospace">
      const nexlify = () => {"{"}
    </text>
    <text x="20" y="40" fill="#00d4ff" fontSize="12" fontFamily="monospace">
      return "Next-Gen Tech";
    </text>
    <text x="10" y="60" fill="#00d4ff" fontSize="12" fontFamily="monospace">
      {"}"}
    </text>
  </motion.svg>
);

// Enhanced Grid SVG
const GridSVG = () => (
  <motion.svg
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    }}
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.25 }}
    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </motion.svg>
);

// Enhanced HeroContainer
const HeroContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "0 2rem",
  background: `
    url("https://images.unsplash.com/photo-1624969862644-791f368c20c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 212, 255, 0.2))
  `,
  backgroundBlendMode: "overlay",
  position: "relative",
  color: "#ffffff",
  overflow: "hidden",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,0,0,0.9) 100%)",
    zIndex: 0,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem",
  },
}));

// Enhanced Headline
const Headline = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2.5rem, 8vw, 4rem)", // Responsive font size
  color: "#FFFFFF",
  letterSpacing: "2px",
  textShadow: "0px 4px 20px rgba(0, 212, 255, 0.6)",
  zIndex: 1,
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
    textShadow: "0px 6px 30px rgba(0, 212, 255, 0.8)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "clamp(1.8rem, 6vw, 3rem)",
  },
}));

// Enhanced Subtitle
const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  fontWeight: 400,
  fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
  color: "#00d4ff",
  marginTop: "1.5rem",
  letterSpacing: "1px",
  background: "rgba(0, 0, 0, 0.8)",
  padding: "0.625rem 1.25rem",
  borderRadius: "8px",
  border: "1px solid rgba(0, 212, 255, 0.4)",
  zIndex: 1,
  overflow: "hidden",
  whiteSpace: "nowrap",
  boxShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
  },
}));

// Enhanced FooterText (Buttons)
const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 500,
  fontSize: "clamp(0.875rem, 2vw, 1rem)",
  color: "#FFFFFF",
  background:
    "linear-gradient(90deg, rgba(0, 212, 255, 0.3), rgba(52, 199, 89, 0.3))",
  padding: "0.5rem 1rem",
  borderRadius: "20px",
  border: "1px solid #00d4ff",
  position: "absolute",
  bottom: "2rem",
  transition: "all 0.3s ease",
  zIndex: 2,
  "&:hover": {
    background: "#00d4ff",
    color: "#000000",
    transform: "translateY(-5px)",
    boxShadow: "0px 6px 15px rgba(0, 212, 255, 0.6)",
  },
  [theme.breakpoints.down("sm")]: {
    bottom: "1rem",
    padding: "0.4rem 0.8rem",
  },
}));

// Enhanced Scroll Indicator
const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "2.5rem",
  width: "30px",
  height: "50px",
  border: "2px solid #00d4ff",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 1,
  cursor: "pointer",
  "&:before": {
    content: '""',
    width: "6px",
    height: "12px",
    backgroundColor: "#00d4ff",
    borderRadius: "3px",
    animation: "scroll 1.8s infinite",
  },
  "&:hover": {
    borderColor: "#34c759",
    transform: "scale(1.1)",
  },
  "@keyframes scroll": {
    "0%": { transform: "translateY(-10px)", opacity: 0 },
    "50%": { opacity: 1 },
    "100%": { transform: "translateY(10px)", opacity: 0 },
  },
  [theme.breakpoints.down("sm")]: {
    bottom: "1.5rem",
  },
}));

const Home = () => {
  const subtitleText = "Full-Stack Developer | Powered by Nexlify";

  const typingVariants = {
    animate: {
      width: ["0%", "100%", "100%", "0%"],
      transition: {
        duration: 4,
        times: [0, 0.5, 0.75, 1],
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero">
      <HeroContainer>
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <GridSVG />
        </motion.div>
        <WaveSVG />
        <CodeParticleSVG style={{ top: "20%", left: "10%" }} />
        <CodeParticleSVG style={{ top: "60%", right: "10%" }} />
        <BinarySVG style={{ top: "15%", left: "5%" }} />
        <BinarySVG
          style={{ bottom: "20%", right: "5%", transform: "rotate(45deg)" }}
        />
        <CircuitSVG style={{ top: "10%", right: "15%" }} />
        <CircuitSVG
          style={{ bottom: "15%", left: "15%", transform: "scale(-1, 1)" }}
        />
        <CodeSnippetSVG style={{ top: "30%", left: "5%" }} />
        <CodeSnippetSVG
          style={{ bottom: "25%", right: "5%", transform: "scale(-1, 1)" }}
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Headline variant="h1">EZEDIN EBRAHIM</Headline>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Subtitle>
            <motion.span
              variants={typingVariants}
              animate="animate"
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              {subtitleText}
            </motion.span>
          </Subtitle>
        </motion.div>

        {/* LinkedIn and Gmail Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* LinkedIn Icon */}
          <motion.svg
            style={{
              position: "absolute",
              top: "calc(50% + 80px)",
              left: "50px",
              width: "clamp(20px, 4vw, 24px)",
              height: "clamp(20px, 4vw, 24px)",
              zIndex: 2,
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.2, fill: "#00d4ff" }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <path
                d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zm-1.5-12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 12.5h-3v-5.5c0-1.4-1.1-2.5-2.5-2.5S10 10.1 10 11.5V19H7V8h3v1.5c1-1.4 2.6-2 4.5-2 3 0 5.5 2.2 5.5 5V19z"
                fill="#ffffff"
              />
            </a>
          </motion.svg>

          {/* Gmail Icon */}
          <motion.svg
            style={{
              position: "absolute",
              top: "calc(50% + 80px)",
              right: "50px",
              width: "clamp(20px, 4vw, 24px)",
              height: "clamp(20px, 4vw, 24px)",
              zIndex: 2,
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.2, fill: "#00d4ff" }}
            transition={{ duration: 0.3 }}
          >
            <a href="mailto:ezedinebrahim131@gmail.com">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                fill="#ffffff"
              />
            </a>
          </motion.svg>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FooterText sx={{ left: "2rem" }}>
              <a
                href="https://github.com/yourusername"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                GitHub
              </a>
            </FooterText>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FooterText sx={{ right: "2rem" }}>
              <a
                href="/cv.pdf"
                download="Ezedin_CV.pdf"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Download CV
              </a>
            </FooterText>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Smooth Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection("about")} // Replace "about" with your next section ID
        >
          <ScrollIndicator />
        </motion.div>
      </HeroContainer>
    </section>
  );
};

export default Home;
