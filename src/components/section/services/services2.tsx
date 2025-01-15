import ServiceCard from "./service-card3";
import SectionTitle from "@/components/section-title";

export default function Services({ services }: { services: Service[] }) {
	return (
		<div className="container ">
			<SectionTitle
				title="Services"
				// description="Get your company heading in the right direction with our digital marketing strategist"
			/>
			{/* <Heading
				title="We create a unique action plan for brands"
				className="text-center"
			/>
			<TitleDescription
				desc="Get your company heading in the right direction with our digital marketing strategist"
				className="mx-auto text-center mb-12 max-w-lg"
			/> */}
			<div className="lg:flex gap-8 mt-12">
				{services.map((service, index) => (
					<div key={index} className="mb-8 lg:mb-0 flex-1">
						<ServiceCard {...service} />
					</div>
				))}
			</div>
		</div>
	);
}
