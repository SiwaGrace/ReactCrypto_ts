import DashboardLayout from "@/components/DashboardLayout";
import { Box } from "@chakra-ui/react";
import Portfolio from "./components/Portfolio";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Box pt="24px">
        <Portfolio />
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
