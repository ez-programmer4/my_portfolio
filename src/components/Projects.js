import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import ethioshopImage from "../assets/images/ethioshop.png";

import LearnspherImage from "../assets/images/elearning.png";
// Enhanced ProjectSection
const ProjectSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "3rem 2rem",
  background: `
    url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 212, 255, 0.5))
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
      "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,0,0,0.9) 100%)",
    zIndex: 0,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1rem",
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
  opacity: 0.25,
});

// Enhanced Circuit SVG
const CircuitSVG = styled(motion.svg)(({ theme }) => ({
  position: "absolute",
  width: "clamp(150px, 20vw, 200px)",
  opacity: 0.3,
  zIndex: 0,
  [theme.breakpoints.down("sm")]: {
    width: "100px",
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
  padding: "0.75rem 1rem",
  borderRadius: "6px",
  border: "1px solid rgba(0, 212, 255, 0.5)",
  boxShadow: "0 0 12px rgba(0, 212, 255, 0.4)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    padding: "0.5rem 0.75rem",
  },
}));

// Enhanced Tech Particle
const TechParticle = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  width: "clamp(15px, 2vw, 20px)",
  height: "clamp(15px, 2vw, 20px)",
  background:
    "linear-gradient(45deg, rgba(0, 212, 255, 0.6), rgba(52, 199, 89, 0.6))",
  borderRadius: "50%",
  boxShadow: "0 0 20px rgba(0, 212, 255, 0.7)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: "12px",
    height: "12px",
  },
}));

// Enhanced Project Title
const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2.5rem, 6vw, 3.25rem)",
  color: "#00d4ff",
  textShadow: "0px 4px 20px rgba(0, 212, 255, 0.9)",
  marginBottom: "3rem",
  zIndex: 1,
  letterSpacing: "2px",
  transition: "all 0.3s ease",
  "&:hover": {
    textShadow: "0px 6px 25px rgba(0, 212, 255, 1)",
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2rem",
  },
}));

// Enhanced Project Card
const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(31, 45, 61, 0.95)",
  color: "#fff",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
  display: "flex",
  flexDirection: "row",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  overflow: "hidden",
  position: "relative",
  border: "1px solid rgba(0, 212, 255, 0.3)",
  "&:hover": {
    transform: "translateY(-15px) scale(1.04)",
    boxShadow: "0 20px 40px rgba(0, 212, 255, 0.6)",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

// Enhanced Card Title
const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
  marginBottom: "0.75rem",
  color: "#00d4ff",
  textShadow: "0px 2px 12px rgba(0, 212, 255, 0.7)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.125rem",
  },
}));

// Enhanced Card Description
const CardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.875rem, 2vw, 1rem)",
  color: "#D1D5DB",
  marginBottom: "1.25rem",
  lineHeight: "1.6",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

// Enhanced Project Button
const ProjectButton = styled(Button)(({ theme }) => ({
  padding: "0.625rem 1.25rem",
  fontSize: "clamp(0.875rem, 2vw, 0.9375rem)",
  fontWeight: 600,
  borderRadius: "6px",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 6px 15px rgba(0, 212, 255, 0.6)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
    fontSize: "0.8125rem",
  },
}));

const GithubButton = styled(ProjectButton)({
  backgroundColor: "#00d4ff",
  "&:hover": {
    backgroundColor: "#00a0cc",
  },
});

const LiveButton = styled(ProjectButton)({
  backgroundColor: "#34c759",
  marginLeft: "0.625rem",
  "&:hover": {
    backgroundColor: "#28a745",
  },
});

// Enhanced Image Container
const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px 0 0 20px",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,212,255,0.2))",
    pointerEvents: "none",
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "20px 20px 0 0",
    height: "200px",
  },
}));

// Enhanced Description Container
const DescriptionContainer = styled(Box)(({ theme }) => ({
  flex: 2,
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgba(31, 45, 61, 0.95), rgba(0, 20, 40, 0.9))",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

const Project = () => {
  const projects = [
    {
      title: "EthioShop: E-Commerce Web Application",
      description:
        "A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a seamless online shopping experience. Features include a dynamic product catalog, shopping cart, user authentication with JWT, and a secure checkout system. Enhanced with Material-UI for a responsive design and Framer Motion for smooth animations, it’s deployed on Render with MongoDB for scalable data management, achieving high performance and reliability.",
      image: ethioshopImage,
      github: "github.com/ez-programmer4/ethioshop", // Updated to your GitHub username
      live: "https://ethioshop-820b.onrender.com/",
    },
    {
      title: "LearnSphere: E-Learning Web Application",
      description:
        "- Coming Soon - A comprehensive e-learning platform developed using the MERN stack (MongoDB, Express.js, React, Node.js), branded as 'LearnSphere - Your Gateway to Knowledge.' Offers a searchable course catalog, user dashboards for progress tracking, video content integration, and an interactive quiz system. Built with React, Material-UI, and Framer Motion for a responsive, animated UI, it integrates EmailJS for notifications and MongoDB for efficient data storage, deployed to provide accessible education online.",
      image: LearnspherImage,
      github: "github.com/ez-programmer4/ethioshop", // Updated to your GitHub username and repo name
      live: "https://learnsphere.onrender.com/", // Updated live link (placeholder—replace with actual URL)
    },
  ];

  return (
    <section id="projects">
      <ProjectSection>
        {/* Enhanced Grid Overlay */}
        <GridOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
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

        {/* Enhanced Circuit Decorations */}
        <CircuitSVG
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.3, rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          whileInView={{
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
          whileHover={{ opacity: 0.6, scale: 1.1 }}
          style={{ top: "5%", left: "10%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 50 H25 V20 H40 V50 H60 V30 H80 M20 70 H40 V90 H60 V70 H90"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
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
          animate={{ opacity: 0.3, rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          whileInView={{
            y: [0, 10, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
          whileHover={{ opacity: 0.6, scale: 1.1 }}
          style={{ bottom: "10%", right: "15%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 50 H25 V20 H40 V50 H60 V30 H80 M20 70 H40 V90 H60 V70 H90"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
          />
        </CircuitSVG>

        {/* Enhanced Code Snippets */}
        <CodeSnippet
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          style={{ top: "10%", right: "15%" }}
        >
          {`const project = () => {
  return "Innovative Solution";
};`}
        </CodeSnippet>
        <CodeSnippet
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          style={{ bottom: "15%", left: "15%" }}
        >
          {`function deployApp() {
  console.log("Live!");
}`}
        </CodeSnippet>

        {/* Enhanced Tech Particles */}
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          style={{ top: "20%", left: "25%" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          style={{ bottom: "25%", right: "20%" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          style={{ top: "30%", right: "30%" }}
        />

        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ scale: 1.02, transition: { duration: 0.5 } }}
        >
          <ProjectTitle>Featured Projects</ProjectTitle>
        </motion.div>

        {/* Enhanced Project Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: "1200px", zIndex: 1 }}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectCard>
                  <ImageContainer>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.4s ease",
                        "&:hover": { transform: "scale(1.15)" },
                      }}
                    />
                  </ImageContainer>
                  <DescriptionContainer>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <Box sx={{ display: "flex", gap: "0.625rem" }}>
                      <GithubButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </GithubButton>
                      <LiveButton
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See Live
                      </LiveButton>
                    </Box>
                  </DescriptionContainer>
                </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </ProjectSection>
    </section>
  );
};

export default Project;
