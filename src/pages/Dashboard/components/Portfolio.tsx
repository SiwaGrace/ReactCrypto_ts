import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";
import { PiHandWithdrawFill } from "react-icons/pi";

const Portfolio = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      bg={"white"}
      borderRadius={"xl"}
      p={5}
      align={{
        base: "flex-start",
      }}
      flexDir={{
        base: "column",
        lg: "row",
      }}
      spaceY={{
        base: 4,
        lg: 0,
      }}
    >
      <Stack>
        <HStack>
          <Text color={"gray.80"}>Total Portfolio Value</Text>
          <Icon as={IoIosInformationCircleOutline} />
        </HStack>
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          ₹ 112,312.24
        </Text>
      </Stack>
      {/*  */}
      <Stack>
        <Text color={"gray.80"}>Wallet Balance</Text>
        <HStack gap={"8"}>
          <HStack>
            <Text fontWeight={"semibold"} fontSize={"2xl"}>
              22.39401000
            </Text>
            <Tag.Root>
              <Tag.Label>BTC</Tag.Label>
            </Tag.Root>
          </HStack>
          <HStack>
            <Text fontWeight={"semibold"} fontSize={"2xl"}>
              ₹ 1,300.00
            </Text>
            <Tag.Root>
              <Tag.Label>INR</Tag.Label>
            </Tag.Root>
          </HStack>
        </HStack>
      </Stack>
      {/* buttons */}
      <HStack>
        {[
          {
            icon: FaArrowDownLong,
            title: "Deposit",
          },
          { icon: PiHandWithdrawFill, title: "Withdraw" },
        ].map((item, index) => (
          <Button key={index} h={"40px"} bg={"p.purple"} rounded={"xl"}>
            <Icon as={item.icon} />
            {item.title}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default Portfolio;
