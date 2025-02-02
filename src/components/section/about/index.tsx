import AnimateText from "@/components/amination/text";
import TitleBadge from "@/components/title-badge";
import { Button } from "@/components/ui/button";
import ParallaxTiltMultiple from "@/components/ui/parallax/parallax-multiple";
import { aboutData } from "@/dummy-data";
import parse from "html-react-parser";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { useRouter } from "next/router";

export default function About() {
	const router = useRouter();
	return (
		<div className="container">
			<div className="flex flex-col md:flex-row gap-8 my-24">
				<div className="flex-1">
					<ParallaxTiltMultiple
						leftImage="/works/1.jpg"
						rightImage="/portfolio.webp"
					/>
				</div>
				<div className="flex-1">
					<TitleBadge title="About Us" />
					<h2 className="text-3xl xl:text-5xl mt-3 mb-2">
						<AnimateText text="What We Do" />
					</h2>
					<motion.div
						className="text-muted-foreground mb-4 text-lg"
						initial={{ y: 50, filter: "blur(5px)" }}
						whileInView={{ y: 0, filter: "blur(0)" }}
						transition={{ duration: 1, delay: 1 / 10 }}
					>
						{router.pathname === "/about"
							? parse(aboutData.longDescription)
							: parse(aboutData.shortDescription)}
					</motion.div>
					{router.pathname === "/" && (
						<motion.div
							className="mt-8"
							initial={{ y: 50, filter: "blur(5px)" }}
							whileInView={{ y: 0, filter: "blur(0)" }}
							transition={{ duration: 1, delay: 1 / 13 }}
						>
							<Link href="/about">
								<Button size="lg" className="flex items-center">
									<span>Read More</span>
									<Plus />
								</Button>
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}
