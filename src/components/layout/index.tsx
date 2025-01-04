import Header from "./header";
import PreLoader from "./preloader";

export default function Layout(props: ReactChildren) {
	const { children } = props;

	return (
		<>
			<Header />
			{children}
			<PreLoader />
		</>
	);
}
