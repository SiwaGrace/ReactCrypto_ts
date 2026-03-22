import { Box, Card, Tag, Text } from "@chakra-ui/react";

type InfoCard = {
  cardbg?: string;
  tagbg?: string;
  labelcolor?: string;

  taglabel?: string;
  text?: string;
  textcolor?: string;
};

const InfoCard = ({
  cardbg,
  tagbg,
  taglabel,
  labelcolor,
  text,
  textcolor,
}: InfoCard) => {
  return (
    <Card.Root rounded={"20px"} p={6} bg={cardbg}>
      <Box>
        <Tag.Root bg={tagbg} color={labelcolor} rounded={"10px"}>
          <Tag.Label>{taglabel}</Tag.Label>
        </Tag.Root>
      </Box>
      <Text color={textcolor}>{text}</Text>
    </Card.Root>
  );
};

export default InfoCard;
