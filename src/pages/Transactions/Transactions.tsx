import DashboardLayout from "@/components/DashboardLayout";
import {
  Box,
  Button,
  Card,
  Flex,
  Icon,
  Tabs,
  Tag,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";
import TransactionTable from "./components/TransactionTable";
import { AiOutlineDownload } from "react-icons/ai";

const items = [
  {
    title: "ALL",
    count: "349",
    content: "qhnejsv",
  },
  {
    title: "Deposit",
    count: "114",
    content: "qhnejsv",
  },
  {
    title: "Withdraw",
    count: "213",
    content: "qhnejsv",
  },
  {
    title: "Trade",
    count: "22",
    content: "qhndsfv",
  },
];

const Transactions = () => {
  return (
    <DashboardLayout title="Transactions">
      <Flex justifyContent={"end"} pb={"4"}>
        <Button bg={"p.purple"}>
          <Icon as={AiOutlineDownload} />
          Export CSV
        </Button>
      </Flex>

      <Card.Root>
        <Tabs.Root defaultValue="1" width="full">
          <Flex p={"4"} gap={"6px"}>
            <Tabs.List>
              {items.map((item, index) => (
                <Tabs.Trigger key={index} value={item.title}>
                  {item.title}
                  <Tag.Root
                    rounded={"10px"}
                    overflowY={"hidden"}
                    overflowX={"auto"}
                  >
                    <Tag.Label>{item.count}</Tag.Label>
                  </Tag.Root>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <InputGroup startElement={<LuUser />}>
              <Input placeholder="Search by ID or destination" />
            </InputGroup>
          </Flex>
          {/*  */}
          <Box pos="relative" minH="400px" width="full">
            {items.map((item, index) => (
              <Tabs.Content
                key={index}
                value={item.title}
                position="absolute"
                inset="0"
                p={"4"}
                _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: "300ms",
                }}
                _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "120ms",
                }}
              >
                <TransactionTable />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Card.Root>
    </DashboardLayout>
  );
};

export default Transactions;
