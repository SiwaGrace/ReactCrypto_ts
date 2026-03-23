import { Button, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";

const Transactions = () => {
  const transaction = [
    {
      icon: AiFillDollarCircle,
      title: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹ 112,312.24",
    },
    {
      icon: FaBitcoin,
      title: "BTC Sell",
      date: "2022-06-09 7:06 PM",
      amount: "- 12.34436568 BTC",
      secondamount: "+ $81,123.100",
    },
    {
      icon: AiFillDollarCircle,
      title: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹ 112,312.24",
    },
  ];
  return (
    <Stack gap={6} bg={"white"} p={6}>
      <Text color={"gray.80"}>Recent Transactions</Text>

      {transaction.map((item, index) => (
        <Flex justifyContent={"space-between"} key={index}>
          <HStack>
            <Icon
              as={item.icon}
              w={"10"}
              h={10}
              p={2.5}
              bg={"gray.200"}
              rounded={"full"}
            />
            <Stack>
              <Text>{item.title}</Text>
              <Text color={"gray.60"}>{item.date}</Text>
            </Stack>
          </HStack>
          <Stack>
            <Text fontWeight={"semibold"} fontSize={"smd"}>
              {item.amount}
            </Text>
            {item.secondamount && (
              <Text color={"gray.60"}>{item.secondamount}</Text>
            )}
          </Stack>
        </Flex>
      ))}

      <Button
        rounded={"8px"}
        bg={"gray.200"}
        color={"black"}
        fontWeight={"semibold"}
      >
        View All
      </Button>
    </Stack>
  );
};

export default Transactions;
