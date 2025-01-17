import Layout from "@/components/layout";
import About from "@/components/section/about";
import Banner from "@/components/section/banner";
import Contact from "@/components/section/contact";
import Portfolio from "@/components/section/portfolio";
import Services from "@/components/section/services/services2";
// import Works from "@/components/section/works";
import { contactData, services } from "@/dummy-data";

export default function Home() {
	return (
		<>
			<Banner />
			<About />
			<Services services={services} />
			<Portfolio />
			<Contact contactData={contactData} />
		</>
	);
}

Home.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};