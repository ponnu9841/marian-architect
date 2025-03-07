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
import { getPageFetchData } from "@/utils/pageFetchData";
// import { useScroll } from "motion/react";
// import { useRef } from "react";

interface HomeProps {
   banner: Banner[] | [];
   services: Service[] | [];
   contact: Contact | null;
   about: About | null;
}

export async function getStaticProps() {
   const data = await getPageFetchData(["/banner", "/service", "/contact", "/about"]);

   if (!data) {
      return { props: { error: "Error fetching data" } };
   }

   const [banners, services, contact, about] = data;

   return {
      props: { banner: banners, services, contact, about },
      revalidate: +(process.env.NEXT_REVALIDATE_SECONDS || 3600*24),
   };
}

export default function Home(props: HomeProps) {
   const { banner, about, services, contact } = props;

   // const containerRef = useRef<HTMLDivElement>(null);
   // const { scrollYProgress } = useScroll({
   //   target: containerRef,
   //   offset: ["start start", "end end"],
   // });
   return (
      <>
         {/* <Banner
				title="Architecture is a visual art, and the building speak for themselves"
				description="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
					purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
					condimentum ipsum consequat. Mauris vitae consequat nibh, vitae
					interdum mi."
			/> */}
         {banner?.length > 0 && (
            <div className="min-w-full relative z-10">
               <Carousel carouselItems={banner} />
            </div>
         )}

         {/* <div className="relative z-10 overflow-hidden" ref={containerRef}> */}
         {/* <div className="relative z-10 overflow-hidden"> */}
         {/* <BackgroundScroll scrollYProgress={scrollYProgress} /> */}
         <Portfolio />
         {services?.length > 0 && <Services services={services} />}
         {about && <About aboutData={about} />}
         {contact && <Contact contact={contact} />}
      </>
      // </div>
   );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
   return <Layout>{page}</Layout>;
};
