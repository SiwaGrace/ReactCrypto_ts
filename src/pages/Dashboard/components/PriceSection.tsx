import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tabs,
} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { PiMinusCircleFill } from "react-icons/pi";

const PriceSection = () => {
  const timestamp = ["7:15PM", "12:55PM", "6:35AM", "12:15PM", "5:55PM"];
  return (
    <Box h={"full"} bg={"white"} p={6}>
      <Flex justifyContent={"space-between"}>
        <Stack>
          <Text>Current Price</Text>
          <HStack>
            <Text>₹ 112,312.24</Text>
            <Text color={"green"}>
              <Icon as={MdArrowOutward} />
              0.04%
            </Text>
          </HStack>
        </Stack>

        <HStack>
          <Button rounded={"lg"}>
            <Icon as={HiMiniPlusCircle} />
            <Text>Buy</Text>
          </Button>
          <Button rounded={"lg"}>
            <Icon as={PiMinusCircleFill} />
            <Text>Sell</Text>
          </Button>
        </HStack>
      </Flex>

      <Tabs.Root defaultValue="members" variant="plain">
        <Tabs.List bg="bg.muted" rounded="l3" p="1">
          <Tabs.Trigger value="1h">1H</Tabs.Trigger>
          <Tabs.Trigger value="1d">1D</Tabs.Trigger>
          <Tabs.Trigger value="1w">1W</Tabs.Trigger>
          <Tabs.Trigger value="1M">1M</Tabs.Trigger>
          <Tabs.Indicator rounded="l2" />
        </Tabs.List>
        <Tabs.Content value="1h"></Tabs.Content>
        <Tabs.Content value="1d">
          <Image w={"100%"} src="Graph.png" />
          <Flex mt={"6"} justifyContent={"space-between"}>
            {timestamp.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="1w">Manage your 1w for freelancers</Tabs.Content>
        <Tabs.Content value="1M">Manage your 1w for 1M</Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default PriceSection;
