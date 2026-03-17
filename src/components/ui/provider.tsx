import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../theme/index";

export function Provider(props: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
}
