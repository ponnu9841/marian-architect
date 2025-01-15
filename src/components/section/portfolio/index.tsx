import Heading from "@/components/heading";
import NextImage from "@/components/ui/Image";

const portfolios = [
	{
		title: "Portfolio 1",
		images: ["/portfolio.webp", "/portfolio.webp", "/portfolio.webp"],
	},
	{
		title: "Portfolio 2",
		images: ["/portfolio.webp", "/portfolio.webp", "/portfolio.webp"],
	},
	{
		title: "Portfolio 3",
		images: ["/portfolio.webp", "/portfolio.webp", "/portfolio.webp"],
	},
];

export default function Portfolio() {
	return (
		<div className="container my-24">
			<Heading title="Portfolio" variant="h2" className="text-center" />
			{portfolios.map((portfolio, index) => (
				<div className="mt-5" key={index}>
					<Heading title={portfolio.title} variant="h3" className="mb-3" />
					<div
						className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						key={index}
					>
						<div className="absolute top-1/2 -translate-y-1/2 bg-primary h-[1px] w-[calc(66%+1.5rem)] z-10"></div>
						{portfolio.images.map((image, index2) => (
							<div key={index2}>
								<NextImage
									src={image}
									className="aspect-square md:max-w-[200px] hover:max-w-full md:min-h-[400px] z-20 transition-all duration-300"
									imageClassName="object-cover md:object-contain transition-all duration-300"
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
