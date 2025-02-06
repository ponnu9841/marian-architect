import Footer from "./footer";
import Header from "./header";
import PreLoader from "./preloader";
import ScrollToTop from "./scroll-to-top";
import { useRouter } from "next/router";

export default function Layout(props: ReactChildren) {
	const { children } = props;
	const router = useRouter();

	return (
		<>
			<Header />
				<div className="bg-[url(/background-2.jpg)] bg-cover bg-center max-h-screen overflow-auto">
					{children}
					<Footer />
				</div>
			{router.pathname !== "/404" && <PreLoader />}
			<ScrollToTop />
		</>
	);
}
