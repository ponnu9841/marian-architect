import { motion } from "motion/react";
import TitleDescription from "./title-desc";

export default function SectionTitle({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<>
			<motion.h2
				className="text-3xl xl:text-5xl font-normal text-center tracking-wider"
				initial={{ opacity: 0, transform: "translateY(-70px)" }}
				whileInView={{ opacity: 1, transform: "translateY(0)" }}
				transition={{
					duration: 1,
					delay: 1 / 10,
				}}
			>
				{title}
			</motion.h2>
			<div className="mx-auto text-center max-w-lg">
				{description && <TitleDescription desc={description} />}
			</div>
		</>
	);
}
