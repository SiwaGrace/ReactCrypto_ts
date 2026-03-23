import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        p: {
          purple: { value: "#5F00D9" },
          black: { value: "#171717" },
        },
        gray: {
          5: { value: "#F3F3F7" },
          10: { value: "#EEEEF4" },
          20: { value: "#D8DDE2" },
          40: { value: "#BABACA" },
          60: { value: "#797E82" },
          80: { value: "#535D66" },
        },
      },
      fonts: {
        heading: { value: "Ubuntu, sans-serif" },
        body: { value: "Ubuntu, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
