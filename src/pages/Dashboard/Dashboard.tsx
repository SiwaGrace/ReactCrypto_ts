import DashboardLayout from "@/components/DashboardLayout";
import { Grid, GridItem } from "@chakra-ui/react";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap="4"
      >
        <GridItem
          colSpan={{
            base: 1,
            md: 2,
          }}
        >
          <Portfolio />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            cardbg="white"
            tagbg="purple"
            taglabel="Loans"
            labelcolor="white"
            text="lorembke"
            textcolor="black"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            cardbg="purple"
            tagbg="white"
            taglabel="Contact"
            labelcolor="purple"
            text="lorembke"
            textcolor="white"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
