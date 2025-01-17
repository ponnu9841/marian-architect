import { Separator } from "@/components/ui/separator";
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
			{children}
			<Separator />
			<Footer />
			{router.pathname !== "/404" && <PreLoader />}
			<ScrollToTop />
		</>
	);
}
