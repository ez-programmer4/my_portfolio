import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "@emailjs/browser";

// Enhanced Styled Components with Responsive Design
const ContactSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "120px 40px",
  background: `
    url("https://images.unsplash.com/photo-1531290083166-7d3922d75b25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3") no-repeat center/cover,
    linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 212, 255, 0.6))
  `,
  backgroundBlendMode: "overlay",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
  borderBottom: "4px solid rgba(0, 212, 255, 0.5)",
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0, 212, 255, 0.2), transparent 70%)",
    opacity: 0.7,
    zIndex: 0,
    animation: "gentlePulse 8s infinite",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 50%)",
    zIndex: 0,
  },
  [theme.breakpoints.down("md")]: {
    padding: "80px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "60px 15px",
    minHeight: "auto",
  },
}));

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

const HoloWaveSVG = styled(motion.svg)(({ theme }) => ({
  position: "absolute",
  width: "clamp(200px, 30vw, 500px)",
  opacity: 0.45,
  filter: "drop-shadow(0 0 12px rgba(0, 212, 255, 0.6))",
  "& path": {
    stroke: "url(#holoGradient)",
    strokeDasharray: "15 10",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
}));

const OrbitNode = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  width: "clamp(20px, 3vw, 30px)",
  height: "clamp(20px, 3vw, 30px)",
  background:
    "radial-gradient(circle, rgba(0, 212, 255, 0.9), rgba(0, 212, 255, 0))",
  borderRadius: "50%",
  boxShadow:
    "0 0 25px rgba(0, 212, 255, 0.8), inset 0 0 10px rgba(0, 212, 255, 0.5)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const ContactPulse = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(16px, 2.5vw, 22px)",
  color: "#00d4ff",
  background: "rgba(0, 0, 0, 0.9)",
  padding: "clamp(12px, 2vw, 18px) clamp(20px, 3vw, 30px)",
  borderRadius: "50px",
  border: "2px solid rgba(0, 212, 255, 0.8)",
  boxShadow:
    "0 0 30px rgba(0, 212, 255, 0.7), inset 0 0 10px rgba(0, 212, 255, 0.5)",
  textTransform: "uppercase",
  letterSpacing: "3px",
  backdropFilter: "blur(6px)",
}));

const TechParticle = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  background:
    "radial-gradient(circle, rgba(0, 212, 255, 1), rgba(0, 212, 255, 0))",
  borderRadius: "50%",
  boxShadow:
    "0 0 30px rgba(0, 212, 255, 0.9), inset 0 0 10px rgba(0, 212, 255, 0.6)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  width: "clamp(20px, 3vw, 30px)",
  height: "clamp(20px, 3vw, 30px)",
}));

const DigitalRain = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  fontFamily: "'Fira Code', monospace",
  fontSize: "clamp(14px, 2vw, 20px)",
  color: "rgba(0, 212, 255, 0.7)",
  whiteSpace: "pre-line",
  textShadow: "0 0 15px rgba(0, 212, 255, 0.6), 0 0 5px rgba(0, 212, 255, 0.4)",
  letterSpacing: "2px",
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 900,
  fontSize: "clamp(40px, 8vw, 80px)",
  color: "#00d4ff",
  textShadow: `
    0 0 15px rgba(0, 212, 255, 1),
    0 0 30px rgba(0, 212, 255, 0.8),
    0 0 50px rgba(0, 212, 255, 0.6)
  `,
  marginBottom: "clamp(40px, 10vw, 90px)",
  zIndex: 1,
  letterSpacing: "6px",
  background: "linear-gradient(90deg, #00d4ff, #34c759, #ff007a)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientShift 5s infinite linear",
}));

const ContactCard = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(145deg, rgba(20, 35, 50, 0.97), rgba(0, 15, 30, 0.92))",
  color: "#fff",
  borderRadius: "35px",
  padding: "clamp(30px, 6vw, 60px)",
  boxShadow: `
    0 25px 50px rgba(0, 0, 0, 0.6),
    inset 0 0 20px rgba(0, 212, 255, 0.4),
    0 0 25px rgba(0, 212, 255, 0.3)
  `,
  border: "2px solid rgba(0, 212, 255, 0.5)",
  maxWidth: "min(90vw, 750px)",
  width: "100%",
  zIndex: 1,
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-70%",
    left: "-70%",
    width: "240%",
    height: "240%",
    background:
      "radial-gradient(circle, rgba(0, 212, 255, 0.25), transparent 60%)",
    opacity: 0.8,
    zIndex: -1,
    animation: "pulse 7s infinite ease-in-out",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    inset: "3px",
    borderRadius: "32px",
    background: "linear-gradient(45deg, rgba(0, 212, 255, 0.1), transparent)",
    zIndex: -1,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "25px",
    borderRadius: "20px",
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: 600,
  fontSize: "clamp(18px, 2.5vw, 23px)",
  color: "#E2E8F0",
  marginBottom: "35px",
  textShadow: "0 0 8px rgba(0, 212, 255, 0.4)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    background: "rgba(255, 255, 255, 0.1)",
    color: "#E2E8F0",
    borderRadius: "15px",
    padding: "15px",
    boxShadow: "inset 0 0 8px rgba(0, 212, 255, 0.4)",
    transition: "all 0.5s ease",
    fontSize: "clamp(14px, 2vw, 18px)",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.15)",
      boxShadow: "inset 0 0 12px rgba(0, 212, 255, 0.5)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(0, 212, 255, 0.95)",
    fontFamily: "'Exo 2', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(14px, 2.5vw, 18px)",
    textShadow: "0 0 5px rgba(0, 212, 255, 0.5)",
    transition: "all 0.4s ease",
    "&.Mui-focused": {
      color: "#00d4ff",
      textShadow: "0 0 10px rgba(0, 212, 255, 0.7)",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(0, 212, 255, 0.8)",
      borderWidth: "2px",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "#00d4ff",
      boxShadow: "0 0 15px rgba(0, 212, 255, 0.6)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00d4ff",
      boxShadow: "0 0 20px rgba(0, 212, 255, 0.8)",
      borderWidth: "3px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiInputBase-root": {
      padding: "8px",
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #00d4ff, #34c759, #ff007a)",
  color: "#fff",
  padding: "clamp(12px, 2vw, 18px) clamp(25px, 4vw, 40px)",
  fontSize: "clamp(16px, 2.5vw, 20px)",
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 700,
  borderRadius: "15px",
  textTransform: "uppercase",
  letterSpacing: "3px",
  transition: "all 0.6s ease",
  boxShadow: "0 8px 25px rgba(0, 212, 255, 0.6)",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
    transition: "all 0.6s ease",
  },
  "&:hover": {
    background: "linear-gradient(90deg, #00a0cc, #28a745, #cc0066)",
    transform: "scale(1.15) translateY(-5px)",
    boxShadow: "0 12px 30px rgba(0, 212, 255, 0.8)",
    "&:before": {
      left: "100%",
    },
  },
  "&:disabled": {
    background: "rgba(100, 100, 100, 0.8)",
    boxShadow: "none",
    transform: "none",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 20px",
  },
}));

const SuccessMessage = styled(motion.div)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(18px, 3vw, 24px)",
  color: "#34c759",
  textShadow: "0 0 15px rgba(52, 199, 89, 0.7)",
  padding: "20px",
  borderRadius: "15px",
  background: "rgba(0, 0, 0, 0.9)",
  border: "2px solid rgba(52, 199, 89, 0.6)",
  boxShadow: "0 0 25px rgba(52, 199, 89, 0.5)",
  zIndex: 2,
}));

const ErrorMessage = styled(motion.div)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(18px, 3vw, 24px)",
  color: "#ff007a",
  textShadow: "0 0 15px rgba(255, 0, 122, 0.7)",
  padding: "20px",
  borderRadius: "15px",
  background: "rgba(0, 0, 0, 0.9)",
  border: "2px solid rgba(255, 0, 122, 0.6)",
  boxShadow: "0 0 25px rgba(255, 0, 122, 0.5)",
  zIndex: 2,
}));

const GlobalStyle = styled("style")({
  "@keyframes pulse": {
    "0%": { transform: "scale(1)", opacity: 0.7 },
    "50%": { transform: "scale(1.1)", opacity: 0.9 },
    "100%": { transform: "scale(1)", opacity: 0.7 },
  },
  "@keyframes gentlePulse": {
    "0%": { opacity: 0.7 },
    "50%": { opacity: 0.9 },
    "100%": { opacity: 0.7 },
  },
  "@keyframes gradientShift": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  "@keyframes orbit": {
    "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
    "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
  },
});

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      };

      const response = await emailjs.send(
        "service_1fu7z5h",
        "template_v58zans",
        templateParams,
        "zrc1hSgrMFJrUql2f"
      );

      console.log("SUCCESS!", response.status);
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section id="contact">
      <ContactSection>
        <GlobalStyle />

        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <linearGradient
              id="holoGradient"
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
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1.2"
              />
            </pattern>
          </defs>
        </svg>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <GridOverlay
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 0.4, rotate: 2 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100%" height="100%" fill="url(#grid)" />
          </GridOverlay>

          <HoloWaveSVG
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.45, scale: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ top: "5%", left: "5%" }}
            viewBox="0 0 100 100"
          >
            <path
              d="M10 50 Q25 10 40 50 T70 50 T100 50"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M10 60 Q25 30 40 60 T70 60 T100 60"
              strokeWidth="2"
              fill="none"
            />
          </HoloWaveSVG>

          <HoloWaveSVG
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.45, scale: 1 }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.8,
            }}
            style={{ bottom: "5%", right: "5%" }}
            viewBox="0 0 100 100"
          >
            <path
              d="M10 50 Q25 90 40 50 T70 50 T100 50"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M10 40 Q25 70 40 40 T70 40 T100 40"
              strokeWidth="2"
              fill="none"
            />
          </HoloWaveSVG>

          <ContactPulse
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ top: "10%", right: "20%" }}
          >
            {"TRANSMISSION"}
          </ContactPulse>

          <ContactPulse
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
            style={{ bottom: "10%", left: "15%" }}
          >
            {"CONNECTION LIVE"}
          </ContactPulse>

          <TechParticle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            style={{ top: "15%", left: "5%" }}
          />

          <TechParticle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
            style={{ bottom: "15%", right: "10%" }}
          />

          <DigitalRain
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.7, y: 100 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ top: "0%", left: "5%" }}
          >
            {"1011 0100 1100 0011"}
          </DigitalRain>

          <DigitalRain
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.7, y: 100 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
            style={{ top: "0%", right: "5%" }}
          >
            {"0110 1001 1110 0001"}
          </DigitalRain>

          <OrbitNode
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ top: "20%", left: "20%", transformOrigin: "center" }}
          />

          <OrbitNode
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ bottom: "20%", right: "20%", transformOrigin: "center" }}
          />
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ContactTitle>Connect with Me</ContactTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
        >
          <ContactCard>
            {status === "success" ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Signal Transmitted Successfully!
              </SuccessMessage>
            ) : status === "error" ? (
              <ErrorMessage
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Transmission Failed. Try Again!
              </ErrorMessage>
            ) : (
              <>
                <ContactText>
                  Send your signal through the digital cosmos!
                </ContactText>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "20px", md: "35px" },
                  }}
                >
                  <StyledTextField
                    label="Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ style: { color: "#00d4ff" } }}
                    InputProps={{
                      style: { color: "#E2E8F0" },
                    }}
                  />
                  <StyledTextField
                    label="Email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    InputLabelProps={{ style: { color: "#00d4ff" } }}
                    InputProps={{
                      style: { color: "#E2E8F0" },
                    }}
                  />
                  <StyledTextField
                    label="Message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={6}
                    InputLabelProps={{ style: { color: "#00d4ff" } }}
                    InputProps={{
                      style: { color: "#E2E8F0" },
                    }}
                  />
                  <SubmitButton type="submit" disabled={loading}>
                    {loading ? "Transmitting..." : "Send Transmission"}
                  </SubmitButton>
                </Box>
                <ContactText sx={{ marginTop: "35px" }}>
                  Or connect directly at:{" "}
                  <motion.span
                    whileHover={{ scale: 1.15, color: "#34c759" }}
                    style={{
                      color: "#00d4ff",
                      textShadow: "0 0 10px rgba(0, 212, 255, 0.7)",
                      fontWeight: 700,
                    }}
                  >
                    ezedinebrahim131@gmail.com
                  </motion.span>
                </ContactText>
              </>
            )}
          </ContactCard>
        </motion.div>
      </ContactSection>
    </section>
  );
};

export default Contact;
