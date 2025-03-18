import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Styled Navbar Container
const NavbarContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: { xs: "15px 20px", md: "20px 40px" },
  background: `
    linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 212, 255, 0.3)),
    rgba(0, 0, 0, 0.7)
  `,
  backdropFilter: "blur(10px)",
  borderBottom: "2px solid rgba(0, 212, 255, 0.5)",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 20px rgba(0, 212, 255, 0.3)",
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0, 212, 255, 0.2), transparent 70%)",
    opacity: 0.6,
    zIndex: -1,
    animation: "gentlePulse 8s infinite",
  },
});

// Holographic Grid Overlay
const GridOverlay = styled(motion.svg)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.3,
  zIndex: 0,
  filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.4))",
});

// Circuit Line SVG
const CircuitLineSVG = styled(motion.svg)({
  position: "absolute",
  width: "200px",
  opacity: 0.35,
  filter: "drop-shadow(0 0 8px rgba(0, 212, 255, 0.5))",
  "& path": {
    stroke: "url(#navGradient)",
  },
});

// Enhanced Navbar Brand
const NavbarBrand = styled(Typography)({
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 900,
  fontSize: "32px", // Slightly larger for impact
  color: "#00d4ff",
  textShadow: `
    0 0 15px rgba(0, 212, 255, 0.8),
    0 0 25px rgba(0, 212, 255, 0.6),
    0 0 40px rgba(0, 212, 255, 0.4)
  `,
  letterSpacing: "4px",
  background: "linear-gradient(90deg, #00d4ff, #34c759, #ff007a)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientShift 6s infinite linear",
  cursor: "pointer",
  position: "relative",
  "&:before": {
    // Subtle underline effect
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "50%",
    width: "60%",
    height: "2px",
    background: "rgba(0, 212, 255, 0.7)",
    transform: "translateX(-50%)",
    boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
    animation: "pulse 2s infinite",
  },
});

// Nav Link
const NavLink = styled(Typography)({
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: 600,
  color: "#E2E8F0",
  textShadow: "0 0 8px rgba(0, 212, 255, 0.4)",
  cursor: "pointer",
  position: "relative",
  fontSize: { xs: "16px", md: "18px" },
  padding: { xs: "8px 15px", md: "10px 20px" },
  transition: "all 0.4s ease",
  "&:hover": {
    color: "#00d4ff",
    transform: "translateY(-3px)",
    textShadow: "0 0 15px rgba(0, 212, 255, 0.7)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "5px",
    left: "50%",
    width: "0",
    height: "2px",
    background: "#00d4ff",
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover:after": {
    width: "70%",
  },
  "&.active": {
    color: "#34c759",
    textShadow: "0 0 15px rgba(52, 199, 89, 0.7)",
    "&:after": {
      width: "70%",
      background: "#34c759",
    },
  },
});

// Hamburger Menu Button
const MenuButton = styled(IconButton)({
  color: "#00d4ff",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.2) rotate(90deg)",
    color: "#34c759",
    background: "rgba(0, 212, 255, 0.2)",
    boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)",
  },
});

// Drawer Styles
const DrawerContent = styled(Box)({
  width: { xs: "200px", sm: "250px" },
  background:
    "linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 212, 255, 0.3))",
  height: "100%",
  padding: "20px",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0, 212, 255, 0.2), transparent 70%)",
    opacity: 0.7,
    zIndex: 0,
  },
});

const DrawerLink = styled(Typography)({
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  color: "#E2E8F0",
  textShadow: "0 0 8px rgba(0, 212, 255, 0.4)",
  padding: "15px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#00d4ff",
    transform: "translateX(10px)",
    textShadow: "0 0 15px rgba(0, 212, 255, 0.7)",
  },
  "&.active": {
    color: "#34c759",
    textShadow: "0 0 15px rgba(52, 199, 89, 0.7)",
  },
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
  "@keyframes pulse": {
    // Added for underline effect
    "0%": { transform: "translateX(-50%) scale(1)", opacity: 0.7 },
    "50%": { transform: "translateX(-50%) scale(1.1)", opacity: 1 },
    "100%": { transform: "translateX(-50%) scale(1)", opacity: 0.7 },
  },
});

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll to section and update active link
  const handleScroll = (href) => {
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScrollListener = () => {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.replace("#", ""));
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.href.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollListener);
    return () => window.removeEventListener("scroll", handleScrollListener);
  }, [navLinks]);

  return (
    <>
      <GlobalStyle />
      <NavbarContainer>
        {/* Gradient Definition */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <linearGradient
              id="navGradient"
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

        {/* Grid Overlay */}
        <GridOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="navGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#navGrid)" />
        </GridOverlay>

        {/* Circuit Lines */}
        <CircuitLineSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "10%", left: "5%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 50 H30 V20 H50 V50 H70 V30 H90"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
        </CircuitLineSVG>
        <CircuitLineSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          style={{ top: "10%", right: "5%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M10 50 H30 V80 H50 V50 H70 V70 H90"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
        </CircuitLineSVG>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onClick={() => handleScroll("#home")}
        >
          <NavbarBrand>Nexlify</NavbarBrand>
        </motion.div>

        {/* Desktop Nav Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "30px",
            alignItems: "center",
          }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NavLink
                className={
                  activeSection === link.href.replace("#", "") ? "active" : ""
                }
                onClick={() => handleScroll(link.href)}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </Box>

        {/* Mobile Hamburger Menu */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <MenuButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon fontSize="large" />
            </MenuButton>
          </motion.div>
        </Box>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{ "& .MuiDrawer-paper": { background: "transparent" } }}
        >
          <DrawerContent>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <MenuButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon fontSize="large" />
              </MenuButton>
            </Box>
            <List>
              {navLinks.map((link, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <DrawerLink
                      className={
                        activeSection === link.href.replace("#", "")
                          ? "active"
                          : ""
                      }
                      onClick={() => handleScroll(link.href)}
                    >
                      {link.name}
                    </DrawerLink>
                  </motion.div>
                </ListItem>
              ))}
            </List>
          </DrawerContent>
        </Drawer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
