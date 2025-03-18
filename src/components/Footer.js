import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Grid, IconButton, Button } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Styled Footer Container
const FooterContainer = styled(Box)({
  padding: "60px 40px",
  background: `
    url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 212, 255, 0.4))
  `,
  backgroundBlendMode: "overlay",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
  borderTop: "3px solid rgba(0, 212, 255, 0.5)",
  zIndex: 1,
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0, 212, 255, 0.15), transparent 70%)",
    opacity: 0.6,
    zIndex: 0,
    animation: "gentlePulse 10s infinite",
  },
});

// Grid Overlay
const FooterGridOverlay = styled(motion.svg)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.25,
  zIndex: 0,
  filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.3)) blur(1px)",
});

// Circuit Line SVG
const CircuitLineSVG = styled(motion.svg)({
  position: "absolute",
  width: "350px",
  opacity: 0.3,
  filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.4))",
  "& path": {
    stroke: "url(#circuitGradient)",
  },
});

// Holographic Wave SVG
const WaveSVG = styled(motion.svg)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100px",
  opacity: 0.4,
  zIndex: 0,
});

// Tech Particle
const TechParticle = styled(motion.div)({
  position: "absolute",
  background:
    "radial-gradient(circle, rgba(0, 212, 255, 1), rgba(0, 212, 255, 0))",
  borderRadius: "50%",
  boxShadow: "0 0 20px rgba(0, 212, 255, 0.7)",
});

// Footer Title with Nexlify
const FooterTitle = styled(Typography)({
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 800,
  fontSize: "32px",
  color: "#00d4ff",
  textShadow: `
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.6)
  `,
  marginBottom: "25px",
  letterSpacing: "3px",
  background: "linear-gradient(90deg, #00d4ff, #34c759, #ff007a)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientShift 6s infinite linear",
});

// Navigation Link
const NavLink = styled(Typography)({
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  color: "#E2E8F0",
  textShadow: "0 0 6px rgba(0, 212, 255, 0.4)",
  cursor: "pointer",
  position: "relative",
  transition: "all 0.4s ease",
  "&:hover": {
    color: "#00d4ff",
    transform: "translateY(-3px) scale(1.05)",
    textShadow: "0 0 12px rgba(0, 212, 255, 0.7)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "0",
    height: "2px",
    background: "#00d4ff",
    transition: "width 0.3s ease",
  },
  "&:hover:after": {
    width: "100%",
  },
});

// Social Icon Button
const SocialIconButton = styled(IconButton)({
  color: "#00d4ff",
  padding: "12px",
  background: "rgba(0, 212, 255, 0.1)",
  border: "1px solid rgba(0, 212, 255, 0.4)",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.25) rotate(10deg)",
    color: "#34c759",
    background: "rgba(0, 212, 255, 0.2)",
    boxShadow:
      "0 0 20px rgba(0, 212, 255, 0.6), inset 0 0 5px rgba(0, 212, 255, 0.3)",
  },
});

// Back to Top Button
const TopButton = styled(Button)({
  position: "absolute",
  bottom: "20px",
  right: "20px",
  background: "linear-gradient(90deg, #00d4ff, #34c759)",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "25px",
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.1) translateY(-5px)",
    background: "linear-gradient(90deg, #00a0cc, #28a745)",
    boxShadow: "0 0 25px rgba(0, 212, 255, 0.7)",
  },
});

// Copyright Text with Nexlify
const CopyrightText = styled(Typography)({
  fontFamily: "'Fira Code', monospace",
  fontWeight: 400,
  fontSize: "15px",
  color: "rgba(209, 213, 219, 0.9)",
  marginTop: "30px",
  textShadow: "0 0 4px rgba(0, 212, 255, 0.3)",
});

// Global Animations
const GlobalStyle = styled("style")({
  "@keyframes gentlePulse": {
    "0%": { opacity: 0.6 },
    "50%": { opacity: 0.8 },
    "100%": { opacity: 0.6 },
  },
  "@keyframes gradientShift": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  "@keyframes waveFlow": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
});

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer>
      <FooterContainer>
        <GlobalStyle />

        {/* Gradient Definition for CircuitLineSVG */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <linearGradient
              id="circuitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#34c759", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ff007a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>

        <FooterGridOverlay
          initial={{ opacity: 0, rotate: -1 }}
          animate={{ opacity: 0.25, rotate: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="footerGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </FooterGridOverlay>

        <WaveSVG
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 1440 100"
        >
          <path
            fill="none"
            stroke="#00d4ff"
            strokeWidth="2"
            strokeDasharray="10 5"
            d="M0,50 Q360,20 720,50 T1440,50"
          />
          <path
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            d="M0,70 Q360,40 720,70 T1440,70"
          />
        </WaveSVG>

        <CircuitLineSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "10%", left: "5%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 90 H30 V50 H50 V70 H70 V30 H90"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
        </CircuitLineSVG>
        <CircuitLineSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          style={{ bottom: "10%", right: "5%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 90 H30 V50 H50 V70 H70 V30 H90"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
        </CircuitLineSVG>

        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          style={{ top: "15%", left: "10%", width: "20px", height: "20px" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
          style={{ bottom: "15%", right: "10%", width: "25px", height: "25px" }}
        />

        <Grid container spacing={5} justifyContent="center" alignItems="center">
          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FooterTitle>Nexlify</FooterTitle>
            </motion.div>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <NavLink
                    component="a"
                    href={link.href}
                    sx={{ textDecoration: "none" }}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FooterTitle>Connect</FooterTitle>
            </motion.div>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "25px" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SocialIconButton
                  component="a"
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </SocialIconButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SocialIconButton
                  component="a"
                  href="mailto:ezedinebrahim131@gmail.com"
                >
                  <EmailIcon />
                </SocialIconButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SocialIconButton
                  component="a"
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </SocialIconButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <SocialIconButton
                  component="a"
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </SocialIconButton>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright with Nexlify */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CopyrightText>
            © {new Date().getFullYear()} Nexlify | Ezedin Ebrahim
          </CopyrightText>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TopButton component="a" href="#home" startIcon={<ArrowUpwardIcon />}>
            Back to Top
          </TopButton>
        </motion.div>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
