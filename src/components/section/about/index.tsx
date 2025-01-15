// import RenderCount from "@/components/count-timer";
// import RenderAvatar from "@/components/Avatar";
import Heading from "@/components/heading";
import TitleBadge from "@/components/title-badge";
import NextImage from "@/components/ui/Image";
import { Button } from "@/components/ui/button";
// import StethoscopeIcon from "@/icons/stethoscope";
// import { aboutCounter } from "@/services/dummyData";
import { Plus } from "lucide-react";

export default function About() {
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
    				<Heading
    					title="What We Do"
    					variant="h2"
    					className="mt-3 mb-2"
    				/>
    				<p className="text-muted-foreground mb-4 text-lg">
    					At Marian Architects, we’re on a mission to transform the way the
    					world thinks about building by making sustainability the heart of
    					every design. We believe that great architecture isn’t just about
    					aesthetics—it’s about creating spaces that are functional, thoughtful,
    					and harmonious with the environment. This belief drives us to design
    					buildings that not only meet your needs but also respect the planet we
    					all share.
    				</p>
    				<div className="mt-8">
    					<Button size="lg" className="flex items-center">
    						<span>Read More</span>
    						<Plus />
    					</Button>
    				</div>
    			</div>
			</div>

			
		</div>
	);
}
