import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import { Box, Container, Flex } from "@chakra-ui/react";

type DashboardLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const DashboardLayout = ({ title, children }: DashboardLayoutProps) => {
  return (
    <Flex>
      <Box
        h="100vh"
        boxShadow="sm"
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideNav />
      </Box>
      <Box flexGrow={"1"}>
        <TopNav title={title} />
        <Container>{children}</Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
