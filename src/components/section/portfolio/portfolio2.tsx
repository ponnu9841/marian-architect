import GalleryDrawerContent from "@/components/gallery-drawer-content";
// import Heading from "@/components/heading";
import SectionTitle from "@/components/section-title";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import NextImage from "@/components/ui/Image";
// import { motion } from "motion/react";
import { useState } from "react";
import PortfolioImage from "./portfolio-image";
import { Button } from "@/components/ui/button";
// import CarouselSlider from "@/components/carousel";

const portfolio = [
	{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
	{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 7, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 8, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 9, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 10, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 11, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
	{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 7, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 8, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 9, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 10, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 11, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
	{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 7, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 8, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 9, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 10, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 11, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
	{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 4, src: "/works/1.jpg", alt: "Image 3" },
	{ id: 5, src: "/works/3.jpg", alt: "Image 1" },
	{ id: 6, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 7, src: "/portfolio.webp", alt: "Image 1" },
	{ id: 8, src: "/works/1.jpg", alt: "Image 1" },
];

export default function Portfolio() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const openDialog = (id: number) => {
		setSelectedImage(id);
	};
	const closeDialog = () => {
		setSelectedImage(null);
	};

	return (
		<section id="portfolio" className="px-2 pt-10 md:pt-24 mb-0 relative z-5">
			<div>
				<div className="mb-4">
					<SectionTitle
						title="Portfolio"
						// description="Get your company heading in the right direction with our digital marketing strategist"
					/>
				</div>
				<div className="">
					<ul className="w-full grid grid-cols-1 lg:grid-cols-12 gap-2">
						{portfolio.map((image, index) => {
							let colspan = "col-span-12 lg:col-span-3";
							if (index === 4 || index === 6 || index === 7) {
								colspan = "col-span-12 lg:col-span-2";
							}
							// if (index !== 0 && index % 10 === 0) {  // 11th image
							// 	colspan = "col-span-12 lg:col-span-6";
							// }
							if (index !== 0 && index % 5 === 0) {
								colspan = "col-span-12 lg:col-span-6";
							}

							return (
								<li
									key={index}
									className={`overflow-hidden max-h-[280px] ${colspan}`}
									onClick={() => openDialog(index)}
								>
									<PortfolioImage image={image} />
								</li>
							);
						})}
					</ul>
					<div className="text-center">
						<Button variant="default" size="lg" className="mt-8 text-base py-6">
							View More
						</Button>
					</div>
				</div>
			</div>
			<Dialog open={selectedImage !== null} onOpenChange={closeDialog}>
				<DialogContent className="max-w-[90vw] w-full max-h-[90vh] h-full p-5 text-white bg-transparent border-none">
					{selectedImage !== null && (
						<GalleryDrawerContent
							images={portfolio}
							selectedImage={selectedImage}
							setSelectedImage={setSelectedImage}
						/>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
}
