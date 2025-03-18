import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Customize your theme here
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
});

export default theme;
