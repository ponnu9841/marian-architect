import DashBoardLayout from "@/components/layout/dashboard/dashboard-layout";
import React from "react";

export default function PortfolioPage() {
  return <div>PortfolioPage</div>;
}

PortfolioPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
