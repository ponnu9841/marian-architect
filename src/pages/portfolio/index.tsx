import Layout from "@/components/layout";
import Banner from "@/components/section/banner";
import Works from "@/components/section/works";
import React from "react";

export default function Portfolio() {
	return (
		<div>
			<Banner title="Portfolio" />
			<Works />
		</div>
	);
}

Portfolio.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
