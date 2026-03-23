import { Button, CloseButton, Drawer, Icon, Portal } from "@chakra-ui/react";
import { IoMenuSharp } from "react-icons/io5";
import SideNav from "./SideNav";

const SideDrawer = () => {
  return (
    <Drawer.Root placement={{ base: "start" }}>
      <Drawer.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          display={{
            base: "block",
            lg: "none",
          }}
        >
          <Icon as={IoMenuSharp} />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(store) => (
                <Drawer.Body>
                  <SideNav />
                  <button hidden onClick={() => store.setOpen(false)}>
                    Close
                  </button>
                </Drawer.Body>
              )}
            </Drawer.Context>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default SideDrawer;
