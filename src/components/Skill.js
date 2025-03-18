import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

// Enhanced SkillsSection with Fixed Height and Fixed Scrollbar Syntax
const SkillsSection = styled(Box)(({ theme }) => ({
  padding: { xs: "2rem 1rem", sm: "3rem 1.25rem", md: "4rem 2rem" },
  height: "100vh", // Fixed height
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: `
    url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 212, 255, 0.6))
  `,
  backgroundBlendMode: "overlay",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
  "&::-webkit-scrollbar": { display: "none" }, // Corrected scrollbar hiding
  "-ms-overflow-style": "none", // IE and Edge
  "scrollbar-width": "none", // Firefox
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(0,0,0,0.9) 100%)",
    zIndex: 0,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent)",
    animation: "scanline 10s infinite linear",
  },
  "@keyframes scanline": {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(100%)" },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 0.75rem",
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
  opacity: 0.3,
});

// Enhanced Orbit SVG
const OrbitSVG = styled(motion.svg)(({ theme }) => ({
  position: "absolute",
  width: "clamp(200px, 25vw, 300px)",
  opacity: 0.35,
  zIndex: 0,
  filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
}));

// Enhanced Circuit Line SVG
const CircuitLineSVG = styled(motion.svg)(({ theme }) => ({
  position: "absolute",
  width: "clamp(250px, 30vw, 400px)",
  opacity: 0.25,
  zIndex: 0,
  filter: "drop-shadow(0 0 8px rgba(0, 212, 255, 0.4))",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
}));

// Enhanced Skill Badge
const SkillBadge = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  fontFamily: "Courier New, monospace",
  fontSize: "clamp(0.875rem, 2vw, 1rem)",
  color: "#00d4ff",
  background:
    "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 20, 40, 0.9))",
  padding: "0.75rem 1rem",
  borderRadius: "25px",
  border: "1px solid rgba(0, 212, 255, 0.6)",
  boxShadow:
    "0 0 20px rgba(0, 212, 255, 0.5), inset 0 0 5px rgba(0, 212, 255, 0.3)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    padding: "0.5rem 0.75rem",
  },
}));

// Enhanced Tech Particle
const TechParticle = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  background: "linear-gradient(45deg, #00d4ff, #34c759)",
  borderRadius: "50%",
  boxShadow: "0 0 25px rgba(0, 212, 255, 0.8), 0 0 10px rgba(52, 199, 89, 0.6)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    boxShadow: "0 0 15px rgba(0, 212, 255, 0.6)",
  },
}));

// Enhanced Binary Stream
const BinaryStream = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  fontFamily: "Courier New, monospace",
  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
  color: "rgba(0, 212, 255, 0.5)",
  whiteSpace: "pre-line",
  textShadow: "0 0 5px rgba(0, 212, 255, 0.7)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.625rem",
  },
}));

// Enhanced Skills Title
const SkillsTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
  marginBottom: { xs: "1.5rem", md: "2rem" },
  color: "#00d4ff",
  textShadow:
    "0px 6px 25px rgba(0, 212, 255, 1), 0px 0px 10px rgba(0, 212, 255, 0.8)",
  zIndex: 1,
  letterSpacing: "3px",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    width: "60%",
    height: "2px",
    background: "linear-gradient(to right, transparent, #00d4ff, transparent)",
    transform: "translateX(-50%)",
  },
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    textShadow: "0px 8px 30px rgba(0, 212, 255, 1)",
  },
  [theme.breakpoints.down("sm")]: {
    "&:after": { width: "40%" },
  },
}));

// Enhanced Skill Card
const SkillCard = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(31, 45, 61, 0.95), rgba(0, 20, 40, 0.9))",
  color: "#fff",
  borderRadius: "20px",
  padding: { xs: "0.75rem", md: "1rem" },
  boxShadow:
    "0 10px 30px rgba(0, 0, 0, 0.4), inset 0 0 5px rgba(0, 212, 255, 0.2)",
  border: "1px solid rgba(0, 212, 255, 0.3)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent)",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  "&:hover": {
    transform: { xs: "scale(1.02)", md: "translateY(-15px) scale(1.05)" },
    boxShadow: "0 20px 40px rgba(0, 212, 255, 0.6)",
    "&:before": { opacity: 0.5 },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem",
  },
}));

// Enhanced Skill Name
const SkillName = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  fontSize: { xs: "1rem", md: "1.25rem" },
  marginBottom: { xs: "0.25rem", md: "0.5rem" },
  color: "#00d4ff",
  textShadow: "0px 2px 12px rgba(0, 212, 255, 0.7)",
  zIndex: 1,
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: "0",
    width: "0",
    height: "2px",
    background: "#34c759",
    transition: "width 0.3s ease",
  },
  "&:hover:after": {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

// Enhanced Skill Description
const SkillDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: { xs: "0.75rem", md: "0.875rem" },
  color: "#D1D5DB",
  lineHeight: "1.5",
  zIndex: 1,
  textShadow: "0 0 5px rgba(0, 212, 255, 0.3)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.625rem",
  },
}));

const Skills = () => {
  const skills = [
    {
      name: "Frontend Development",
      description:
        "React, TypeScript, Next.js, Tailwind CSS, and responsive UI design.",
    },
    {
      name: "Backend Development",
      description:
        "Node.js, Express, RESTful APIs, GraphQL, and server optimization.",
    },
    {
      name: "Database Management",
      description: "MongoDB, PostgreSQL, Firebase, MySQL, and data modeling.",
    },
    {
      name: "DevOps & Cloud",
      description:
        "AWS, Docker, Kubernetes, CI/CD pipelines, and serverless architecture.",
    },
    {
      name: "Mobile Development",
      description: "Flutter, React Native, and cross-platform app development.",
    },
    {
      name: "Testing & QA",
      description:
        "Jest, Cypress, unit testing, and end-to-end testing strategies.",
    },
    {
      name: "UI/UX Design",
      description:
        "Figma, Adobe XD, and prototyping for user-centric experiences.",
    },
    {
      name: "Version Control",
      description: "Git, GitHub, GitLab, and collaborative workflows.",
    },
  ];

  return (
    <section id="skills">
      <SkillsSection>
        {/* Enhanced Grid Overlay */}
        <GridOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="0.5"
                strokeDasharray="3 3"
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

        {/* Enhanced Orbit SVGs */}
        <OrbitSVG
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.35, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          whileInView={{
            scale: [1, 1.05, 1],
            transition: { duration: 3, repeat: Infinity },
          }}
          style={{ top: "5%", left: "10%" }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#orbitGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15 10"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="10 5"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 5"
          />
          <defs>
            <linearGradient
              id="orbitGradient"
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
        </OrbitSVG>
        <OrbitSVG
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.35, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          whileInView={{
            scale: [1, 1.05, 1],
            transition: { duration: 3, repeat: Infinity },
          }}
          style={{ bottom: "10%", right: "5%" }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#orbitGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15 10"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="10 5"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 5"
          />
        </OrbitSVG>

        {/* Enhanced Circuit Lines */}
        <CircuitLineSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          whileInView={{
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
          style={{ top: "15%", right: "10%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 90 H30 V50 H50 V70 H70 V30 H90"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="8 8"
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
                style={{ stopColor: "#ff007a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </CircuitLineSVG>
        <CircuitLineSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          whileInView={{
            y: [0, 10, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
          style={{ bottom: "20%", left: "15%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 90 H30 V50 H50 V70 H70 V30 H90"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />
        </CircuitLineSVG>

        {/* Enhanced Skill Badges */}
        <SkillBadge
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.8)",
          }}
          style={{ top: "10%", right: "25%" }}
        >
          {"<code />"}
        </SkillBadge>
        <SkillBadge
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.8)",
          }}
          style={{ bottom: "15%", left: "20%" }}
        >
          {"{ dev: true }"}
        </SkillBadge>
        <SkillBadge
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.8)",
          }}
          style={{ top: "20%", left: "25%" }}
        >
          {"const skills = []"}
        </SkillBadge>

        {/* Enhanced Tech Particles */}
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          style={{ top: "25%", left: "15%", width: "15px", height: "15px" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          style={{ bottom: "30%", right: "20%", width: "20px", height: "20px" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          style={{ top: "35%", right: "30%", width: "10px", height: "10px" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0, 1.3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }}
          style={{ bottom: "25%", left: "30%", width: "18px", height: "18px" }}
        />

        {/* Enhanced Binary Streams */}
        <BinaryStream
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.5, y: 50 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ top: "0%", left: "5%" }}
        >
          {"0101 1010 1100 0011"}
        </BinaryStream>
        <BinaryStream
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.5, y: 50 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          style={{ top: "0%", right: "5%" }}
        >
          {"1001 0110 1111 0001"}
        </BinaryStream>

        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileInView={{ scale: 1.02, transition: { duration: 0.5 } }}
        >
          <SkillsTitle>My Skills</SkillsTitle>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <Grid
          container
          spacing={{ xs: 1.5, md: 3 }}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: { xs: "100%", md: "1400px" }, zIndex: 1 }}
        >
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.15,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkillCard>
                  <SkillName>{skill.name}</SkillName>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SkillsSection>
    </section>
  );
};

export default Skills;
