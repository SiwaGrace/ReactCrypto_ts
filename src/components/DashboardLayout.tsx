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
        <Container
          overflowX={"hidden"}
          overflowY={"auto"}
          h={"calc(100vh - 64px)"}
          paddingX={{
            base: "4",
            md: "32",
          }}
          paddingTop={"6"}
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
