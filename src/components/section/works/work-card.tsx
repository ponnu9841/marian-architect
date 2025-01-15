import Heading from "@/components/heading";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function WorkCard(props: { works: WorkCardProps[] }) {
	const { works } = props;
	return (
		<div className="columns-1 md:columns-2 gap-24">
			{works.map((work, index) => (
				<AnimatePresence mode="wait" key={index}>
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div
							className={`relative w-full mb-8 md:mb-24 ${
								index === 0 ? "mt-8 md:mt-24" : ""
							}`}
							key={index}
						>
							{/* <NextImage src={work.image} className='aspect-square' imageClassName='object-contain' /> */}
							<div className="flex justify-center items-center relative">
								{/* eslint-disable-next-line */}
								<img src={work.image} alt="" className="max-w-full h-auto" />
								<div className="absolute bottom-0 left-0 p-5 bg-background">
									<Link href="#">
										<Heading
											title={work.heading}
											variant="h5"
											className="mb-1"
										/>
									</Link>
									<div className="flex items-center gap-x-4">
										<span className="text-primary">{work.category}</span>
										<span className="text-primary">{work.style}</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			))}
		</div>
	);
}
