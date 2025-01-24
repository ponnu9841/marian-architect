import NextImage from "@/components/ui/Image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export default function ServiceCard(props: Service) {
	const { title, image } = props;
	return (
		<div className="relative aspect-square group">
			<div className="absolute left-0 top-0 w-full h-full bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
			<NextImage src={image} imageClassName="object-cover rounded-sm" />
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
				<Link href="/services">
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button>{title}</Button>
					</motion.div>
				</Link>
			</div>
		</div>
	);
}
