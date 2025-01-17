import { Separator } from "@/components/ui/separator"
import Footer from "./footer";
import Header from "./header";
import PreLoader from "./preloader";
import ScrollToTop from "./scroll-to-top";

export default function Layout(props: ReactChildren) {
	const { children } = props;

	return (
		<>
			<Header />
			{children}
			<Separator />
			<Footer />
			<PreLoader />
			<ScrollToTop />
		</>
	);
}
