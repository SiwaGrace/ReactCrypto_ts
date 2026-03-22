import { Table, Tag } from "@chakra-ui/react";

const items = [
  {
    id: "HD82NA2H",
    date: "2022-06-09",
    type: {
      name: "INR Deposit",
      tag: "E-transfer",
    },
    amount: "+ ₹ 112,312.24",
    status: "Pending",
  },
  {
    id: "HD82NG%2H",
    date: "2022-06-09",
    type: {
      name: "INR Deposit",
      tag: "E-transfer",
    },
    amount: "+ ₹ 112,312.24",
    status: "Processing",
  },
  {
    id: "HD&FGA2H",
    date: "2022-06-09",
    type: {
      name: "INR Deposit",
      tag: "E-transfer",
    },
    amount: "+ ₹ 112,312.24",
    status: "cancelled",
  },
  {
    id: "HD8VD5A2H",
    date: "2022-06-09",
    type: {
      name: "INR Deposit",
      tag: "E-transfer",
    },
    amount: "+ ₹ 112,312.24",
    status: "completed",
  },
];

// Define the type for status
type StatusType = "cancelled" | "completed" | "processing" | "pending";

const StatusColor: Record<StatusType, string> = {
  cancelled: "red.400",
  completed: "green.400",
  processing: "yellow.400",
  pending: "blue.400",
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

            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.type.name}</Table.Cell>
            <Table.Cell textAlign="end">{item.amount}</Table.Cell>
            <Table.Cell textAlign="end">
              <Tag.Root
                rounded={"2xl"}
                py={"1.5"}
                px={"4"}
                bg={getStatusColor(item.status)}
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
