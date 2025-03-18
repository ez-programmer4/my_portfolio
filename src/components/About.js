import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Enhanced AboutContainer
const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh", // Changed to minHeight for content flexibility
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "0 2rem",
  background: `
    url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 212, 255, 0.4))
  `,
  backgroundBlendMode: "overlay",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.1) 0%, rgba(0,0,0,0.9) 100%)",
    zIndex: 0,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem",
  },
}));

// Enhanced Code Snippet
const CodeSnippet = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  fontFamily: "Courier New, monospace",
  fontSize: "clamp(0.875rem, 2vw, 1rem)",
  color: "#00d4ff",
  whiteSpace: "pre-line",
  background: "rgba(0, 0, 0, 0.7)",
  padding: "0.75rem",
  borderRadius: "5px",
  border: "1px solid rgba(0, 212, 255, 0.4)",
  boxShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    padding: "0.5rem",
  },
}));

// Enhanced Circuit SVG
const CircuitSVG = styled(motion.svg)(({ theme }) => ({
  position: "absolute",
  width: "clamp(100px, 15vw, 150px)",
  opacity: 0.4,
  zIndex: 0,
  [theme.breakpoints.down("sm")]: {
    width: "80px",
  },
}));

// Enhanced Tech Icon SVG
const TechIconSVG = styled(motion.svg)(({ theme }) => ({
  position: "absolute",
  width: "clamp(40px, 6vw, 60px)",
  opacity: 0.6,
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: "30px",
  },
}));

// Enhanced Grid Overlay
const GridOverlay = styled(motion.svg)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  opacity: 0.2,
});

// Enhanced Heading
const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2rem, 6vw, 3rem)",
  color: "#00d4ff",
  textShadow: "0px 4px 15px rgba(0, 212, 255, 0.8)",
  marginBottom: "1.5rem",
  letterSpacing: "1px",
  zIndex: 1,
  transition: "all 0.3s ease",
  "&:hover": {
    textShadow: "0px 6px 20px rgba(0, 212, 255, 1)",
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1rem",
  },
}));

// Enhanced Bio Text Container
const BioTextContainer = styled(Box)(({ theme }) => ({
  maxWidth: "clamp(300px, 60vw, 600px)",
  position: "relative",
  background:
    "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 20, 40, 0.9))",
  padding: "1.5rem",
  borderRadius: "10px",
  border: "1px solid rgba(0, 212, 255, 0.4)",
  boxShadow: "0 0 15px rgba(0, 212, 255, 0.3)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

// Enhanced Bio Text
const BioText = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
  color: "#D1D5DB",
  lineHeight: "1.6",
  whiteSpace: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

// Scroll Indicator (for navigation)
const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "2rem",
  width: "30px",
  height: "50px",
  border: "2px solid #00d4ff",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 2,
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

const About = () => {
  const bioText =
    "I am a full-stack developer passionate about building high-quality, scalable web applications. My expertise lies in modern JavaScript frameworks, backend architecture, and crafting seamless user experiences.";

  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Faster stagger for smoother reveal
        delay: 0.5,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
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
    <section id="about">
      <AboutContainer>
        {/* Enhanced Grid Overlay */}
        <GridOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
              <linearGradient
                id="gridGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ff007a", stopOpacity: 1 }}
                />
              </linearGradient>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </GridOverlay>

        {/* Enhanced Code Snippets */}
        <CodeSnippet
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          style={{ top: "10%", left: "5%" }}
        >
          {`const dev = {
  role: "Full Stack",
  passion: "Web Development"
};`}
        </CodeSnippet>
        <CodeSnippet
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          style={{ bottom: "15%", right: "5%" }}
        >
          {`async function buildFuture() {
  await code("Innovate");
  return "Success";
}`}
        </CodeSnippet>

        {/* Enhanced Circuit Decorations */}
        <CircuitSVG
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.4, rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          whileInView={{
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
          whileHover={{ opacity: 0.7, scale: 1.1 }}
          style={{ top: "20%", left: "10%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 50 H30 V30 H50 V50 H70 V30 H90 M10 70 H40 V90 H60 V70 H90"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="circuitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#34c759", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </CircuitSVG>
        <CircuitSVG
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.4, rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          whileInView={{
            y: [0, 10, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
          whileHover={{ opacity: 0.7, scale: 1.1 }}
          style={{ bottom: "20%", right: "10%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 50 H30 V30 H50 V50 H70 V30 H90 M10 70 H40 V90 H60 V70 H90"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </CircuitSVG>

        {/* Enhanced Tech Icons */}
        <TechIconSVG
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ opacity: 1, scale: 1.2, fill: "#34c759" }}
          style={{ top: "15%", right: "15%" }}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2-2h-2v-2h2v2zm2 2h-2v-2h2v2z"
            fill="#00d4ff"
          />
        </TechIconSVG>
        <TechIconSVG
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ opacity: 1, scale: 1.2, fill: "#34c759" }}
          style={{ bottom: "25%", left: "15%" }}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 2a10 10 0 110 20 10 10 0 010-20zm0 4v6h2v2h-4v-2h2V8h-2V6h2z"
            fill="#00d4ff"
          />
        </TechIconSVG>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ scale: 1.02, transition: { duration: 0.5 } }}
        >
          <Heading>About Me</Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <BioTextContainer>
            <BioText
              component={motion.div}
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
            >
              {bioText.split("").map((char, index) => (
                <motion.span key={index} variants={characterVariants}>
                  {char}
                </motion.span>
              ))}
            </BioText>
          </BioTextContainer>
        </motion.div>

        {/* Scroll Indicator to Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection("projects")} // Replace with your next section ID
        >
          <ScrollIndicator />
        </motion.div>
      </AboutContainer>
    </section>
  );
};

export default About;
