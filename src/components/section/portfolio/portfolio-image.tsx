import NextImage from "@/components/ui/Image";
import {motion} from "motion/react";

type PortfolioImageProps = {
    image: { id: number, src: string; alt: string };
    openDialog: () => void;
};

export default function PortfolioImage({image, openDialog} : PortfolioImageProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.3, x: -50 }}
			whileInView={{ opacity: 1, scale: 1, x: 0 }}
			whileHover={{ scale: 1.1, opacity: 0.8 }}
			whileTap={{ scale: 0.95 }}
			transition={{
				duration: 1,
			}}
            className="h-full"
		>
			<NextImage
				src={image.src || "/no-image.png"}
				alt={image.alt || "Image"}
				className="aspect-square hover:min-w-full z-20 transition-all duration-300 flex justify-center"
				imageClassName="object-cover transition-all duration-300"
				onClick={() => openDialog()}
			/>
		</motion.div>
	);
}

