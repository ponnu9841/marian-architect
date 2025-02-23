import PortfolioForm from "@/components/admin/portfolio/form";
import Portfolio from "@/components/admin/portfolio/portfolio";
import DashBoardLayout from "@/components/layout/dashboard/dashboard-layout";
import { fetchPortfolio } from "@/redux/features/portfolio-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { useEffect } from "react";

export default function Services() {
  const { pageNo } = useAppSelector((state) => state.rootReducer.portfolio);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchPortfolio({ controller, pageNo }));
    return () => controller.abort();
  }, [pageNo]); //eslint-disable-line

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <PortfolioForm />
      </div>
      <div>
        {/* show uploaded images */}
        <Portfolio />
      </div>
    </div>
  );
}

Services.getLayout = function getLayout(page: React.ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
