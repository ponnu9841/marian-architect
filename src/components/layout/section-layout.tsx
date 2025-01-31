import { cn } from "@/lib/utils";
import { useTransform, motion, type MotionValue } from "motion/react";
import React from "react";

export default function SectionLayout({
	children,
	scrollYProgress,
	className,
}: {
	children: React.ReactNode;
	scrollYProgress: MotionValue<number>;
	className?: string;
}) {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
	return (
		<div
			className={cn(
				"min-h-screen sticky top-0 flex justify-center items-center bg-[url(/background-2.jpg)] bg-cover bg-center",
				// !className ? bgClass : "",
				className
			)}
		>
			<motion.div className="w-full" style={{ scale, rotate }}>{children}</motion.div>
		</div>
	);
}
