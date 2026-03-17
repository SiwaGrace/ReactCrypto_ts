import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        global: {},
      },
      fonts: {
        heading: { value: "Ubuntu, sans-serif" },
        body: { value: "Ubuntu, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
