import SectionTitle from "@/components/section-title";
import { motion } from "motion/react";
import ContactCard, { ContactCardProps } from "./contact-card";
import { Card } from "@/components/ui/card";

export default function Contact(props: { contactData: ContactCardProps[] }) {
	const { contactData } = props;
	return (
		<section id="contact">
			<div className="container mb-6 pt-24 relative">
				<SectionTitle title="Contact" />
				<div className="py-12">
					<div className="flex flex-wrap justify-center items-stretch gap-8">
						{contactData.map((item, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]"
							>
								<Card className="shadow-2xl p-2 pt-10 pb-6 border-none h-full">
									<ContactCard {...item} />
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
