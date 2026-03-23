import { Stack, Table, Tag, Text } from "@chakra-ui/react";

const items = [
  {
    id: "HD82NA2H",
    date: {
      date: "2022-06-09",
      time: "7:06 PM",
    },
    type: {
      name: "INR Deposit",
      tag: "E-transfer",
    },
    amount: {
      amount: "+ ₹ 112,312.24",
    },
    status: "Pending",
  },
  {
    id: "HD82NG%2H",
    date: {
      date: "2022-06-09",
      time: "7:06 PM",
    },
    type: {
      name: "INR Deposit",
      tag: "Wire Transfer",
    },
    amount: {
      amount: "+ ₹ 112,312.24",
    },
    status: "Processing",
  },
  {
    id: "HD&FGA2H",
    date: {
      date: "2022-06-09",
      time: "7:06 PM",
    },
    type: {
      name: "INR Deposit",
    },
    amount: {
      amount: "+ ₹ 112,312.24",
      secondamount: "- 12.34436568 BTC",
    },
    status: "cancelled",
  },
  {
    id: "HD8VD5A2H",
    date: {
      date: "2022-06-09",
      time: "7:06 PM",
    },
    type: {
      name: "INR Deposit",
    },
    amount: {
      amount: "+ ₹ 112,312.24",
      secondamount: "- 12.34436568 BTC",
    },
    status: "completed",
  },
];

// Define the type for status
type StatusType = "cancelled" | "completed" | "processing" | "pending";

const StatusColor: Record<StatusType, string> = {
  cancelled: "red.400",
  completed: "green.400",
  processing: "yellow.400",
  pending: "gray.400",
};
const TransactionTable = () => {
  const getStatusColor = (status: string): string => {
    const normalizedStatus = status.toLowerCase() as StatusType;
    return StatusColor[normalizedStatus] || "gray.400";
  };
  const columnHeader = ["ID", "Date & Time", "Type", "Amount", "Status"];
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          {columnHeader.map((item) => (
            <Table.ColumnHeader key={item}>{item}</Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.id}</Table.Cell>

            <Table.Cell>
              <Stack>
                <Text>{item.date.date}</Text>
                <Text color={"gray.60"}>{item.date.time}</Text>
              </Stack>
            </Table.Cell>

            <Table.Cell>
              <Stack>
                <Text>{item.type.name}</Text>
                {item.type.tag && (
                  <Text color={"gray.60"}>{item.type.tag}</Text>
                )}
              </Stack>
            </Table.Cell>

            <Table.Cell>
              <Stack>
                <Text>{item.amount.amount}</Text>
                {item.amount.secondamount && (
                  <Text color={"gray.60"}>{item.amount.secondamount}</Text>
                )}
              </Stack>
            </Table.Cell>
            <Table.Cell>
              <Tag.Root
                rounded={"2xl"}
                py={"1.5"}
                px={"4"}
                bg={getStatusColor(item.status)}
                color={"white"}
              >
                <Tag.Label>{item.status}</Tag.Label>
              </Tag.Root>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TransactionTable;
