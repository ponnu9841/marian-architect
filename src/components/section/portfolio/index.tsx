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
			<Heading title="Portfolio" variant="h2" className="text-center mb-6" />
			<div className="flex gap-6">
				{portfolios.map((portfolio, index) => (
					<div className="mt-5 w-full md:w-[calc(33.33%-1.5rem)]" key={index}>
						<div className="relative">
							{/* <div className="absolute w-[1.5px] h-2/3 left-0 top-0 bg-primary mt-36"></div> */}
							<Heading title={portfolio.title} variant="h3" className="mb-3" />
							<div className="flex flex-col gap-6" key={index}>
								{portfolio.images.map((image, index2) => (
									<NextImage
										src={image}
										className="aspect-square md:max-w-[200px] hover:max-w-full md:min-h-[370px] z-20 transition-all duration-300 flex justify-center"
										imageClassName="object-cover md:object-contain transition-all duration-300"
										key={index2}
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
