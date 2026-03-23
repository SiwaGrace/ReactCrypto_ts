import { Flex, Heading } from "@chakra-ui/react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const TopNav = ({ title }: Props) => {
  return (
    <Flex
      bg={"white"}
      boxShadow={"xl"}
      h={"64px"}
      justify={"space-between"}
      px={"32px"}
      alignItems={"center"}
    >
      <SideDrawer />
      <Heading>{title}</Heading>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" rounded={"50%"} size="sm">
            <GoPerson />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new-txt">Logout</Menu.Item>
              <Menu.Item value="new-file">
                <Link to="/support">support</Link>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

export default TopNav;
