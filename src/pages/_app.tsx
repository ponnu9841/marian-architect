import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { jost } from "../utils/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";

//eslint-disable-next-line
export type PageLayoutType<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: PageLayoutType;
};

export default function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props;
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<div
			className={`min-h-screen w-full ${jost.variable}`}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				{getLayout(<Component {...pageProps} />)}
				<CustomCursor />
			</ThemeProvider>
		</div>
	);
}
