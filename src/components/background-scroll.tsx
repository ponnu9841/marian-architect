import { motion, useTransform, MotionValue } from "motion/react";

export default function BackgroundScroll({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const y = useTransform(scrollYProgress, [0, 1], [0, 1700]);

	return (
		<motion.div
			className="absolute inset-0 bg-background w-full h-[200%] z-1 overflow-hidden"
			style={{ y }}
		>
			<div className="w-full h-[200%] relative">
				<div className="scale-125 absolute inset-0 -top-10 bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:50px_50px] opacity-30"></div>
			</div>
		</motion.div>
	);
}
