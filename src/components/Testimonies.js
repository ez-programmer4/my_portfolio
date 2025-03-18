import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";

// Enhanced Styled Components
const TestimonialsSection = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "120px 40px",
  background: `
    url("https://images.unsplash.com/photo-1553356085-576ff8e2b42c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 212, 255, 0.5))
  `,
  backgroundBlendMode: "overlay",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
  borderBottom: "3px solid rgba(0, 212, 255, 0.4)",
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0, 212, 255, 0.1), transparent 70%)",
    opacity: 0.5,
    zIndex: 0,
    animation: "gentlePulse 12s infinite",
  },
});

const GridOverlay = styled(motion.svg)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  opacity: 0.4,
  filter: "drop-shadow(0 0 15px rgba(0, 212, 255, 0.4)) blur(1px)",
  transform: "rotate(-2deg)",
});

const DataFlowSVG = styled(motion.svg)({
  position: "absolute",
  width: "500px",
  opacity: 0.4,
  filter: "drop-shadow(0 0 12px rgba(0, 212, 255, 0.5))",
  "& path": {
    stroke: "url(#dataGradient)",
  },
});

const TestimonialPulse = styled(motion.div)({
  position: "absolute",
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "20px",
  color: "#00d4ff",
  background: "rgba(0, 0, 0, 0.85)",
  padding: "15px 25px",
  borderRadius: "50px",
  border: "2px solid rgba(0, 212, 255, 0.7)",
  boxShadow:
    "0 0 25px rgba(0, 212, 255, 0.6), inset 0 0 8px rgba(0, 212, 255, 0.4)",
  textTransform: "uppercase",
  letterSpacing: "2px",
  backdropFilter: "blur(5px)",
});

const TechParticle = styled(motion.div)({
  position: "absolute",
  background:
    "radial-gradient(circle, rgba(0, 212, 255, 1), rgba(0, 212, 255, 0))",
  borderRadius: "50%",
  boxShadow:
    "0 0 25px rgba(0, 212, 255, 0.8), inset 0 0 8px rgba(0, 212, 255, 0.5)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
});

const DigitalStream = styled(motion.div)({
  position: "absolute",
  fontFamily: "'Fira Code', monospace",
  fontSize: "18px",
  color: "rgba(0, 212, 255, 0.6)",
  whiteSpace: "pre-line",
  textShadow: "0 0 12px rgba(0, 212, 255, 0.5), 0 0 4px rgba(0, 212, 255, 0.3)",
  letterSpacing: "1px",
});

const TestimonialsTitle = styled(Typography)({
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 900,
  fontSize: "70px",
  color: "#00d4ff",
  textShadow: `
    0 0 10px rgba(0, 212, 255, 1),
    0 0 20px rgba(0, 212, 255, 0.8),
    0 0 40px rgba(0, 212, 255, 0.6)
  `,
  marginBottom: "80px",
  zIndex: 1,
  letterSpacing: "5px",
  background: "linear-gradient(90deg, #00d4ff, #34c759, #ff007a)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientShift 6s infinite linear",
});

const TestimonialCard = styled(Card)({
  background:
    "linear-gradient(145deg, rgba(20, 35, 50, 0.95), rgba(0, 15, 30, 0.9))",
  color: "#fff",
  borderRadius: "30px",
  padding: "35px",
  boxShadow: `
    0 20px 40px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(0, 212, 255, 0.3),
    0 0 20px rgba(0, 212, 255, 0.2)
  `,
  border: "2px solid rgba(0, 212, 255, 0.4)",
  transition: "all 0.5s ease",
  "&:hover": {
    transform: "translateY(-15px) scale(1.05) rotate(1deg)",
    boxShadow: `
      0 25px 50px rgba(0, 212, 255, 0.6),
      inset 0 0 20px rgba(0, 212, 255, 0.4)
    `,
    borderColor: "rgba(0, 212, 255, 0.8)",
  },
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-60%",
    left: "-60%",
    width: "220%",
    height: "220%",
    background:
      "radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent 60%)",
    opacity: 0.7,
    zIndex: -1,
    animation: "pulse 6s infinite ease-in-out",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: "28px",
    background: "linear-gradient(45deg, rgba(0, 212, 255, 0.05), transparent)",
    zIndex: -1,
  },
});

const TestimonialText = styled(Typography)({
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: 400,
  fontSize: "19px",
  color: "#E2E8F0",
  marginBottom: "25px",
  lineHeight: "1.7",
  textShadow: "0 0 6px rgba(0, 212, 255, 0.3)",
  position: "relative",
  "&:before": {
    content: '"“"',
    position: "absolute",
    top: "-10px",
    left: "-15px",
    fontSize: "40px",
    color: "rgba(0, 212, 255, 0.5)",
  },
  "&:after": {
    content: '"”"',
    position: "absolute",
    bottom: "-20px",
    right: "-15px",
    fontSize: "40px",
    color: "rgba(0, 212, 255, 0.5)",
  },
});

const TestimonialAuthor = styled(Typography)({
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 700,
  fontSize: "22px",
  color: "#00d4ff",
  textShadow: "0 0 10px rgba(0, 212, 255, 0.5), 0 0 5px rgba(0, 212, 255, 0.3)",
});

const TestimonialRole = styled(Typography)({
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: 400,
  fontSize: "17px",
  color: "#B2F5EA",
  textShadow: "0 0 4px rgba(0, 212, 255, 0.3)",
  opacity: 0.9,
});

const StyledAvatar = styled(Avatar)({
  width: "90px",
  height: "90px",
  border: "4px solid #00d4ff",
  boxShadow: "0 0 20px rgba(0, 212, 255, 0.6), 0 0 5px rgba(0, 212, 255, 0.4)",
  marginBottom: "25px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "rotate(5deg) scale(1.1)",
  },
});

// Global Animations
const GlobalStyle = styled("style")({
  "@keyframes pulse": {
    "0%": { transform: "scale(1)", opacity: 0.7 },
    "50%": { transform: "scale(1.1)", opacity: 0.9 },
    "100%": { transform: "scale(1)", opacity: 0.7 },
  },
  "@keyframes gentlePulse": {
    "0%": { opacity: 0.5 },
    "50%": { opacity: 0.7 },
    "100%": { opacity: 0.5 },
  },
  "@keyframes gradientShift": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
});

const Testimonials = () => {
  const testimonials = [
    {
      text: "An exceptional developer with a keen eye for detail. Delivered a scalable web app ahead of schedule!",
      author: "Jane Doe",
      role: "Project Manager",
      avatar: "https://via.placeholder.com/80",
    },
    {
      text: "Their expertise in full-stack development transformed our project into a seamless, high-performing solution.",
      author: "John Smith",
      role: "Tech Lead",
      avatar: "https://via.placeholder.com/80",
    },
    {
      text: "A pleasure to work with—creative, reliable, and technically brilliant. Highly recommended!",
      author: "Emily Chen",
      role: "Client",
      avatar: "https://via.placeholder.com/80",
    },
  ];

  return (
    <section id="testimonials">
      <TestimonialsSection>
        <GlobalStyle />

        {/* Gradient Definition for DataFlowSVG */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <linearGradient
              id="dataGradient"
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

        <GridOverlay
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 0.4, rotate: 2 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </GridOverlay>

        <DataFlowSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "5%", left: "5%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M20 80 Q40 60 60 80 T100 80"
            strokeWidth="3"
            fill="none"
            strokeDasharray="20 15"
          />
          <path
            d="M20 70 Q40 50 60 70 T100 70"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15 10"
          />
        </DataFlowSVG>
        <DataFlowSVG
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.7,
          }}
          style={{ bottom: "5%", right: "5%" }}
          viewBox="0 0 100 100"
        >
          <path
            d="M20 20 Q40 40 60 20 T100 20"
            strokeWidth="3"
            fill="none"
            strokeDasharray="20 15"
          />
          <path
            d="M20 30 Q40 50 60 30 T100 30"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15 10"
          />
        </DataFlowSVG>

        <TestimonialPulse
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: "10%", right: "20%" }}
        >
          {"FEEDBACK LOOP"}
        </TestimonialPulse>
        <TestimonialPulse
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          style={{ bottom: "15%", left: "15%" }}
        >
          {"CODE REVIEW"}
        </TestimonialPulse>
        <TestimonialPulse
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          style={{ top: "20%", left: "10%" }}
        >
          {"USER PRAISE"}
        </TestimonialPulse>

        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          style={{ top: "15%", left: "5%", width: "20px", height: "20px" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
          style={{ bottom: "20%", right: "10%", width: "25px", height: "25px" }}
        />
        <TechParticle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.4, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
          style={{ top: "25%", right: "20%", width: "18px", height: "18px" }}
        />

        <DigitalStream
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 0.6, y: 80 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ top: "0%", left: "5%" }}
        >
          {"1011 0100 1100 0011"}
        </DigitalStream>
        <DigitalStream
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 0.6, y: 80 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
          style={{ top: "0%", right: "5%" }}
        >
          {"0110 1001 1110 0001"}
        </DigitalStream>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <TestimonialsTitle>Testimonials</TestimonialsTitle>
        </motion.div>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: "1500px" }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.4 + index * 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.06, rotate: 0.5 }}
                whileTap={{ scale: 0.98 }}
              >
                <TestimonialCard>
                  <StyledAvatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <TestimonialText>"{testimonial.text}"</TestimonialText>
                  <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
                  <TestimonialRole>{testimonial.role}</TestimonialRole>
                </TestimonialCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </TestimonialsSection>
    </section>
  );
};

export default Testimonials;
