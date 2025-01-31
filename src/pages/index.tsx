import Carousel from "@/components/carousel-new";
import Layout from "@/components/layout";
import SectionLayout from "@/components/layout/section-layout";
import About from "@/components/section/about";
// import Banner from "@/components/section/banner/banner-2";
import Contact from "@/components/section/contact";
import Portfolio from "@/components/section/portfolio/portfolio2";
import Services from "@/components/section/services/services2";
import { contactData, services } from "@/dummy-data";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function Home() {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	return (
		<div className="min-h-[200vh] relative" ref={container} >
			{/* <Banner
				title="Architecture is a visual art, and the building speak for themselves"
				description="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
					purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
					condimentum ipsum consequat. Mauris vitae consequat nibh, vitae
					interdum mi."
			/> */}
			<div className="min-h-screen relative z-10">
				<Carousel />
			</div>
			<SectionLayout scrollYProgress={scrollYProgress}>
				<Portfolio />
			</SectionLayout>

			<SectionLayout scrollYProgress={scrollYProgress}>
				<Services services={services} />
			</SectionLayout>
			<SectionLayout scrollYProgress={scrollYProgress}>
				<About />
			</SectionLayout>
			<SectionLayout scrollYProgress={scrollYProgress}>
				<Contact contactData={contactData} />
			</SectionLayout>
		</div>
	);
}

Home.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
