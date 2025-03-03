import { teko } from "@/utils/fonts";


export default function LogoText() {
	return (
		<div
			className={`text-primary text-3xl tracking-widest font-bold text-center lh-sm ${teko.className}`}
		>
			Marian<span className="text-secondary">{" "}Architects</span>
			<div className="text-secondary text-xs">Architecture & Interior Design Studio</div>
		</div>
	);
}
