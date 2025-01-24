import Heading from "@/components/heading";
import React from "react";

export default function Banner(props: BannerProps) {
	const { title, description } = props;
	return (
		<div className="min-h-[65vh] bg-[url('/pattern.png')] relative z-[1]">
			<div className="container absolute left-0 top-1/2 -translate-y-1/2 xl:max-w-[75%]">
				<Heading title={title} variant="h1" className="mb-7 leading-6" />
				{description && <p>{description}</p>}
			</div>
		</div>
	);
}
