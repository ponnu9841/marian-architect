// import RenderCount from "@/components/count-timer";
// import RenderAvatar from "@/components/Avatar";
import Heading from "@/components/heading";
import TitleBadge from "@/components/title-badge";
import NextImage from "@/components/ui/Image";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/dummy-data";
// import StethoscopeIcon from "@/icons/stethoscope";
// import { aboutCounter } from "@/services/dummyData";
import parse from "html-react-parser";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {
	const router = useRouter();
	return (
		<div className="container">
			<div className="flex flex-col md:flex-row gap-8 my-24">
				<div className="flex-1">
					<NextImage
						src="/about.webp"
						alt="doctor image"
						imageClassName="object-cover"
						className="min-h-[300px] md:min-h-[500px]"
					/>
				</div>
				<div className="flex-1">
					<TitleBadge title="About Us" />
					<Heading title="What We Do" variant="h2" className="mt-3 mb-2" />
					<div className="text-muted-foreground mb-4 text-lg">
						{router.pathname === "/about"
							? parse(aboutData.longDescription)
							: parse(aboutData.shortDescription)}
					</div>
					{router.pathname === "/" && (
						<div className="mt-8">
							<Link href="/about">
								<Button size="lg" className="flex items-center">
									<span>Read More</span>
									<Plus />
								</Button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
