// src/styles/GlobalStyles.js
import { styled } from "@mui/system";

const GlobalStyles = styled("style")({
  // Base styles for all screens
  "html, body": {
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },
  // Responsive adjustments
  "@media (max-width: 900px)": {
    ".section": {
      padding: "60px 20px", // Reduce padding on tablets
    },
  },
  "@media (max-width: 600px)": {
    ".section": {
      padding: "40px 15px", // Further reduce on mobile
    },
  },
});

export default GlobalStyles;
