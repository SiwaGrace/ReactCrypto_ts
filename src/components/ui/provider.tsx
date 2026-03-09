"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider
        {...props}
        // I ADDED THIS TO ENABLE SYSTEM THEME, BUT IT SEEMS TO CAUSE ISSUES WITH THEME SWITCHING
        defaultTheme="system"
        enableSystem={true}
      />
    </ChakraProvider>
  );
}
