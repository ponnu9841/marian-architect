import Heading from "@/components/heading";
import Layout from "@/components/layout";
import Banner from "@/components/section/banner";
import NextImage from "@/components/ui/Image";
import { services } from "@/dummy-data";
import React from "react";

export default function Services() {
	return (
		<>
			<Banner title="Services" />
			<div className="container py-24 relative bg-background z-[3] bg-background">
				<div className="absolute h-full w-full -top-[100px] left-0 z-[2]"></div>

				<div className="relative z-[3] bg-background">
					{services.map((service, index) => (
						<div className="flex flex-col md:flex-row items-center gap-6 mt-12" key={index}>
							<NextImage
								className={`aspect-square w-full md:w-1/3 ${
									index % 2 === 0 ? "order-2" : ""
								}`}
								src={service.image}
								imageClassName="object-cover"
							/>
							<div className="w-full md:w-2/3">
								<Heading title={service.title} variant="h2" />
								<p className="mt-3">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

Services.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
