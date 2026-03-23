import { Box, Card, Icon, Tag, Text } from "@chakra-ui/react";

type InfoCard = {
  cardbg?: string;
  tagbg?: string;
  labelcolor?: string;
  taglabel?: string;
  text?: string;
  textcolor?: string;
  icon?: any;
  notRequired?: string;
};

const InfoCard = ({
  cardbg,
  tagbg,
  taglabel,
  labelcolor,
  text,
  textcolor,
  icon,
  notRequired,
}: InfoCard) => {
  return (
    <Card.Root w={"100%"} rounded={"20px"} p={6} bg={cardbg}>
      <Box>
        {taglabel ? (
          <Tag.Root bg={tagbg} color={labelcolor} rounded={"10px"}>
            <Tag.Label>{taglabel}</Tag.Label>
          </Tag.Root>
        ) : (
          <Icon as={icon} color={"p.purple"} />
        )}
      </Box>
      {notRequired && (
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {notRequired}
        </Text>
      )}

      <Text color={textcolor}>{text}</Text>
    </Card.Root>
  );
};

export default InfoCard;
