import ServiceCard from "./service-card3";
import SectionTitle from "@/components/section-title";
import { motion } from "motion/react";

export default function Services({ services }: { services: Service[] }) {
	return (
		<section id="services">
			<div className="container pt-10 md:pt-24">
				<SectionTitle
					title="Services"
					// description="Get your company heading in the right direction with our digital marketing strategist"
				/>
				<div className="flex flex-wrap sm:justify-start lg:justify-center -mx-6 2xl:-mx-4 mt-4 md:mt-12">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-6 2xl:px-2 mb-12 2xl:mb-0"
							initial={{ scale: 0.2, filter: "blur(5px)" }}
							whileInView={{ scale: 1, filter: "blur(0)" }}
							transition={{
								duration: 1,
								delay: index === 1 || index === 2 ? 0.3 : 0.5,
							}}
						>
							<ServiceCard {...service} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
