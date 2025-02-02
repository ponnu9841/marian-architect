import GalleryDrawerContent from "@/components/gallery-drawer-content";
import Heading from "@/components/heading";
import SectionTitle from "@/components/section-title";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import NextImage from "@/components/ui/Image";
// import { motion } from "motion/react";
import { useState } from "react";
import PortfolioImage from "./portfolio-image";
import CarouselSlider from "@/components/carousel";

const portfolios = [
	{
		title: "Portfolio 1",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
			{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
			{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
	{
		title: "Portfolio 2",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
			{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
			{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
	{
		title: "Portfolio 3",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
			{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
			{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
	{
		title: "Portfolio 4",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
			{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
			{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
];

export default function Portfolio() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [images, setImages] = useState<
		{ id: number; src: string; alt: string }[]
	>([]);
	const openDialog = (id: number, portfolioIndex: number) => {
		setImages(portfolios[portfolioIndex].images);
		setSelectedImage(id + 1);
	};
	const closeDialog = () => {
		setSelectedImage(null);
		setImages([]);
	};

	return (
		<>
			<div className="container mt-24 mb-0">
				<SectionTitle
					title="Portfolio"
					// description="Get your company heading in the right direction with our digital marketing strategist"
				/>
				<div>
					<CarouselSlider
						carouselContentClassName="justify-stretch max-w-[100%]"
						id="portfolio-slider"
					>
						{portfolios.map((portfolio, index) => (
							<div className="mt-5 min-w-full" key={index}>
								<Heading
									title={portfolio.title}
									variant="h3"
									className="mb-3"
								/>

								<ul
									className="w-full grid grid-cols-1 lg:grid-cols-9 gap-8"
									key={index}
								>
									{portfolio.images.map((image, index2) => {
										let colspan = "col-span-3";
										if (index2 === 3 || index2 === 5) {
											colspan = "col-span-2";
										}
										if (index2 === 4) {
											colspan = "col-span-5";
										}

										return (
											<li
												key={index2}
												className={`overflow-hidden max-h-[220px] ${colspan}`}
											>
												<PortfolioImage
													image={image}
													openDialog={() => openDialog(index2, index)}
												/>
											</li>
										);
									})}
								</ul>
							</div>
						))}
					</CarouselSlider>
				</div>
			</div>
			<Dialog open={selectedImage !== null} onOpenChange={closeDialog}>
				<DialogContent className="max-w-[90vw] w-full max-h-[90vh] h-full p-5 text-white bg-transparent border-none">
					{selectedImage && (
						<GalleryDrawerContent
							images={images}
							selectedImage={selectedImage}
							setSelectedImage={setSelectedImage}
						/>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}
