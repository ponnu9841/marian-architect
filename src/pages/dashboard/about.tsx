import DashBoardLayout from "@/components/layout/dashboard/dashboard-layout";
import AboutForm from "@/components/admin/about/form";
import { useEffect } from "react";
import About from "@/components/admin/about/about";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchAbout } from "@/redux/features/about-slice";

export default function AboutPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAbout(controller));
    return () => controller.abort();
  }, []); //eslint-disable-line

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <AboutForm />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
