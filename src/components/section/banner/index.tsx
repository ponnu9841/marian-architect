import Heading from "@/components/heading";
import React from "react";

export default function Banner() {
	return (
		<div className="min-h-[65vh] bg-[url('/pattern.png')] relative">
			<div className="container absolute left-0 top-1/2 -translate-y-1/2 xl:max-w-[75%]">
				<Heading
					title="Architecture is a visual art, and the building speak for themselves"
					variant="h1"
					className="mb-7 leading-6"
				/>
				<p className="text-lg tracking-wide text-muted-foreground">
					Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
					purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
					condimentum ipsum consequat. Mauris vitae consequat nibh, vitae
					interdum mi.
				</p>
			</div>
		</div>
	);
}
