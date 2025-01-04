import Heading from "@/components/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkCard from "./work-card";
import { allWorks, interior, residential, theaters } from "@/dummy-data";

export default function Works() {
	return (
		<div className="container mt-28">
			<Heading title="Works" className="mb-8" />

			<Tabs defaultValue="all">
				<TabsList>
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="interior">Interior</TabsTrigger>
					<TabsTrigger value="theaters">Theaters</TabsTrigger>
					<TabsTrigger value="residential">Residential</TabsTrigger>
				</TabsList>
				<TabsContent value="all">
					<WorkCard works={allWorks} />
				</TabsContent>
				<TabsContent value="interior">
					<WorkCard works={interior} />
				</TabsContent>
				<TabsContent value="theaters">
					<WorkCard works={theaters} />
				</TabsContent>
				<TabsContent value="residential">
					<WorkCard works={residential} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
