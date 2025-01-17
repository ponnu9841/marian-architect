import SectionTitle from "@/components/section-title";
import React from "react";
import ContactCard, { ContactCardProps } from "./contact-card";
import { Card } from "@/components/ui/card";

export default function Contact(props: { contactData: ContactCardProps[] }) {
	const { contactData } = props;
	return (
		<section className="container">
			<SectionTitle
				title="Contact"
			/>
			<div className="py-12">
				<div className="flex flex-wrap justify-center items-stretch gap-8">
					{contactData.map((item, index) => (
						<Card
							className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] shadow-2xl p-2 pt-10 pb-6 border-none"
							key={index}
						>
							<ContactCard {...item} />
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
