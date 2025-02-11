import Portfolio from "@/components/section/portfolio/portfolio2";
import About from "@/components/section/about";
import Services from "@/components/section/services/services2";
import Contact from "@/components/section/contact";
import Carousel from "@/components/carousel-new";
import { contactData, services } from "@/dummy-data";

export const navItems = [
	{ name: "Home", link: "/", id: "home" },
	{ name: "Portfolio", link: "#portfolio", id: "portfolio" },
	{ name: "Services", link: "#services", id: "services" },
	{ name: "About", link: "#about", id: "about" },
	{ name: "Contact", link: "#contact", id: "contact" },
];

export const sections = [
	{ name: "Home", link: "/", id: "home", content: <Carousel /> },
	{
		name: "Portfolio",
		link: "/portfolio",
		id: "portfolio",
		content: <Portfolio />,
	},
	{
		name: "Services",
		link: "/services",
		id: "services",
		content: <Services services={services} />,
	},
	{ name: "About", link: "/about", id: "about", content: <About /> },
	{
		name: "Contact",
		link: "/contact",
		id: "contact",
		content: <Contact contactData={contactData} />,
	},
];
