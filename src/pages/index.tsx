import Carousel from "@/components/carousel-new";
import Layout from "@/components/layout";
import About from "@/components/section/about";
// import Banner from "@/components/section/banner/banner-2";
import Contact from "@/components/section/contact";
import Portfolio from "@/components/section/portfolio/portfolio2";
import Services from "@/components/section/services/services2";
import { contactData, services } from "@/dummy-data";

export default function Home() {
	return (
		<>
			{/* <Banner
				title="Architecture is a visual art, and the building speak for themselves"
				description="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
					purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
					condimentum ipsum consequat. Mauris vitae consequat nibh, vitae
					interdum mi."
			/> */}
			<Carousel />
			<Portfolio />
			<Services services={services} />
			<About />
			<Contact contactData={contactData} />
		</>
	);
}

Home.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
