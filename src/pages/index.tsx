import axiosClient from "@/axios/axios-client";
// import BackgroundScroll from "@/components/background-scroll";
import Carousel from "@/components/carousel-new";
import Layout from "@/components/layout";
// import ScrollableSection from "@/components/layout/scrollable-section";
// import SectionLayout from "@/components/layout/section-layout";
import About from "@/components/section/about";
// import Banner from "@/components/section/banner/banner-2";
import Contact from "@/components/section/contact";
import Portfolio from "@/components/section/portfolio/portfolio2";
import Services from "@/components/section/services/services2";
// import { useScroll } from "motion/react";
// import { useRef } from "react";

interface HomeProps {
  banner: Banner[] | [];
  services: Service[] | [];
  contact: Contact | null;
  about: About | null;
}

export default function Home(props: HomeProps) {
  const { banner, about, services, contact } = props;

  // const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });
  return (
    <div>
      {/* <Banner
				title="Architecture is a visual art, and the building speak for themselves"
				description="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
					purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
					condimentum ipsum consequat. Mauris vitae consequat nibh, vitae
					interdum mi."
			/> */}
      {banner?.length > 0 && (
        <div className="relative z-10">
          <Carousel carouselItems={banner} />
        </div>
      )}

      {/* <div className="relative z-10 overflow-hidden" ref={containerRef}> */}
      {/* <div className="relative z-10 overflow-hidden"> */}
      {/* <BackgroundScroll scrollYProgress={scrollYProgress} /> */}
      <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center w-full">
        <Portfolio />
      </div>
      {services?.length > 0 && (
        <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center w-full">
          <Services services={services} />
        </div>
      )}
      {about && (
        <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center w-full">
          <About aboutData={about} />
        </div>
      )}
      {contact && (
        <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center w-full">
          <Contact contact={contact} />
        </div>
      )}
    </div>
    // </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const banners = await axiosClient.get("/banner");
    const services = await axiosClient.get("/service");
    const contact = await axiosClient.get("/contact");
    const about = await axiosClient.get("/about");

    return {
      props: {
        banner: banners.data.data,
        services: services.data.data,
        contact: contact.data.data,
        about: about.data.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Handle the error appropriately, e.g., redirect to an error page
    return {
      props: {
        error: "Error fetching Data",
      },
    };
  }
}
