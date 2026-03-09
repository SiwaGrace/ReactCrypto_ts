import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navItems = [
    {
      icon: <TbLayoutDashboardFilled />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <BsArrowDownUp />,
      title: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack justify={"space-between"} boxShadow="sm" maxW="16rem" h="100vh">
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          fontSize="20px"
          fontWeight="bold"
          mt="2rem"
          p={4}
          color={"purple"}
        >
          @DOSOMECODING
        </Heading>

        <Box mt="6">
          {navItems.map((item) => (
            <HStack
              key={item.title}
              mx="3"
              borderRadius={"10px"}
              cursor="pointer"
              py="3"
              px={4}
              _hover={{
                bg: "gray.100",
                color: "black",
              }}
            >
              <Icon>{item.icon}</Icon>
              <Text>{item.title}</Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mb="6">
        <HStack
          mx="3"
          cursor="pointer"
          py="3"
          px={4}
          _hover={{
            bg: "gray.100",
            color: "black",
          }}
        >
          <Icon>
            <BiSupport />
          </Icon>
          <Text>Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
