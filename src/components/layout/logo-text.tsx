import { teko } from "@/utils/fonts";


export default function LogoText() {
	return (
		<div
			className={`text-primary text-lg lg:text-3xl tracking-widest font-bold text-center lh-sm ${teko.className}`}
		>
			Marian<span className="text-secondary">{" "}Architects</span>
			<div className="text-secondary text-[6.75px] lg:text-[0.64rem] -mt-2 lg:-mt-5">Architecture & Interior Design Studio</div>
		</div>
	);
}
