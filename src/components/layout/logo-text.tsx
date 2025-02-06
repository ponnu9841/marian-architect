import { teko } from "@/utils/fonts";


export default function LogoText() {
	return (
		<div
			className={`text-primary text-3xl tracking-widest font-bold ${teko.className}`}
		>
			Marian<span className="text-secondary">Architect</span>
		</div>
	);
}
