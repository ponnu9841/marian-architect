// import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import Footer from "./footer";
import Header from "./header";
// import PreLoader from "./preloader";
import ScrollToTop from "./scroll-to-top";
// import { useEffect } from "react";
// import { setCurrentSection } from "@/redux/features/utils-slice";
// import { useRouter } from "next/router";


export default function Layout(props: ReactChildren) {
	const { children } = props;
	// const dispatch = useAppDispatch();
	// // const router = useRouter();

	// // useEffect(() => {
	// // 	const handleScroll = () => {
	// // 		const sections = document.querySelectorAll("section");
	// // 		let currentSection = "";

	// // 		sections.forEach((section) => {
	// // 			const sectionTop = section.offsetTop;
	// // 			console.log(window.scrollY, section.id, sectionTop - window.innerHeight / 2);
	// // 			if (window.scrollY >= sectionTop - window.innerHeight / 2) {
	// // 				currentSection = section.id;
	// // 			}
	// // 		});

	// // 		dispatch(setCurrentSection(currentSection));
	// // 	};

	// // 	window.addEventListener("scroll", handleScroll);
	// // 	return () => window.removeEventListener("scroll", handleScroll);
	// // }, []);

	// // useEffect(() => {
	// // 	const sections = document.querySelectorAll("section");

	// // 	const observer = new IntersectionObserver(
	// // 		(entries) => {
	// // 			console.log(entries)
	// // 			entries.forEach((entry) => {
	// // 				if (entry.isIntersecting) {
	// // 					dispatch(setCurrentSection(entry.target.id));
	// // 				}
	// // 			});
	// // 		},
	// // 		{ threshold: 0.5 } // Trigger when 60% of the section is visible
	// // 	);

	// // 	sections.forEach((section) => observer.observe(section));

	// // 	return () => observer.disconnect();
	// // }, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 	  let currentSection = "";
	// 	  sections.forEach((id) => {
	// 		const section = document.getElementById(id);
	// 		if (section) {
	// 		  const rect = section.getBoundingClientRect();
	// 		  if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
	// 			currentSection = id;
	// 		  }
	// 		}
	// 	  });
	// 	  dispatch(setCurrentSection(currentSection));
	// 	//   setActiveSection(currentSection);
	// 	};
	
	// 	window.addEventListener("scroll", handleScroll);
	// 	handleScroll(); // Run on mount
	
	// 	return () => {
	// 	  window.removeEventListener("scroll", handleScroll);
	// 	};
	//   }, []); //eslint-disable-line


	return (
		<>
			<Header />
			{children}
			<Footer />
			{/* {router.pathname !== "/404" && <PreLoader />} */}
			<ScrollToTop />
		</>
	);
}
