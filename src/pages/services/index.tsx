import Heading from "@/components/heading copy";
import Layout from "@/components/layout";
import Banner from "@/components/section/banner";
import NextImage from "@/components/ui/Image";
import { services } from "@/dummy-data";
import React from "react";

export default function Services() {
	return (
		<>
			<Banner title="Services" />
			<div className="container my-24">
				{services.map((service, index) => (
					<div
						className="flex flex-col md:flex-row gap-6 mt-12"
						key={index}
					>
						<NextImage
							className="aspect-square w-full md:w-1/3"
							src={service.image}
							imageClassName="object-cover"
                            
						/>
						<div className="w-full md:w-2/3">
							<Heading title={service.title} variant="h2" />
							<p>{service.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

Services.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
