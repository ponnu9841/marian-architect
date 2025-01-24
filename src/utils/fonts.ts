import localFont from "next/font/local";
import { Teko } from "next/font/google";

export const jost = localFont({
	src: "../../public/font/Jost/Jost-VariableFont_wght.ttf",
	variable: "--font-jost",
	style: "normal",
});

export const teko = Teko({ subsets: ["latin"] });

// export const montserrat = localFont({
//     src: "../../public/font/Montserrat/Montserrat-VariableFont_wght.ttf",
//     variable: '--font-montserrat',
//     style: "normal",
// },);

// export const mulish = localFont({
//     src: "../../public/font/Mulish/Mulish-VariableFont_wght.ttf",
//     variable: '--font-mulish',
//     // style: "normal",
// },);
