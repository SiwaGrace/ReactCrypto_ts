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
      p={6}
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
          <Text>Total Portfolio Value</Text>
          <Icon as={IoIosInformationCircleOutline} />
        </HStack>
        <Text>₹ 112,312.24</Text>
      </Stack>
      {/*  */}
      <Stack>
        <Text>Wallet Balance</Text>
        <HStack>
          <HStack>
            <Text>22.39401000</Text>
            <Tag.Root>
              <Tag.Label>BTC</Tag.Label>
            </Tag.Root>
          </HStack>
          <HStack>
            <Text>₹ 1,300.00</Text>
            <Tag.Root>
              <Tag.Label>INR</Tag.Label>
            </Tag.Root>
          </HStack>
        </HStack>
      </Stack>
      {/*  */}
      <HStack>
        <Button h={"30px"}>
          <Icon as={FaArrowDownLong} />
          Deposit
        </Button>
        <Button h={"30px"}>
          <Icon as={PiHandWithdrawFill} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
