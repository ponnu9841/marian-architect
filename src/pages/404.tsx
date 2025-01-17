import Layout from "@/components/layout";
import Banner from "@/components/section/banner";
import React from "react";

export default function ErrorPage() {
	return (
		<div>
			<Banner title="Page Not Found" />
		</div>
	);
}

ErrorPage.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
