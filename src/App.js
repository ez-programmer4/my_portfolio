import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects"; // Import Projects component
import Contact from "./components/Contact"; // Import Contact component
import Testimonials from "./components/Testimonies";
import Footer from "./components/Footer";
import "./App.css";
import Skills from "./components/Skill";
import GlobalStyles from "./styles/GlobalStyles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: { fontSize: "140px", fontWeight: 900, letterSpacing: "4px" },
    h6: { fontSize: "20px", fontWeight: 800 },
  },
  palette: {
    mode: "light",
    text: { primary: "#000000" },
    primary: { main: "#1976d2" }, // Added primary color for buttons, etc.
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />

        {/* Replace placeholder with Projects component */}
        <Testimonials />
        <Contact />
        {/* Replace placeholder with Contact component */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
