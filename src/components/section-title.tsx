import React from "react";
import Heading from "./heading";
import TitleDescription from "./title-desc";

export default function SectionTitle({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<>
			<Heading title={title} className="text-center" variant="h2" />
			<div className="mx-auto text-center max-w-lg">
				{description && <TitleDescription desc={description} />}
			</div>
		</>
	);
}
