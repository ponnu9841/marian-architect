import GalleryDrawerContent from "@/components/gallery-drawer-content";
import Heading from "@/components/heading";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NextImage from "@/components/ui/Image";
import { useState } from "react";

const portfolios = [
	{
		title: "Portfolio 1",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
	{
		title: "Portfolio 2",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
	{
		title: "Portfolio 3",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
		],
	},
	{
		title: "Portfolio 4",
		images: [
			{ id: 1, src: "/portfolio.webp", alt: "Image 1" },
			{ id: 2, src: "/works/1.jpg", alt: "Image 1" },
			{ id: 3, src: "/portfolio.webp", alt: "Image 1" },
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
		<div>
			<div className="container my-24">
				<Heading title="Portfolio" variant="h2" className="text-center mb-6" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{portfolios.map((portfolio, index) => (
						<div className="mt-5" key={index}>
							<div className="relative">
								<Heading
									title={portfolio.title}
									variant="h3"
									className="mb-3"
								/>
								<div className="flex flex-col gap-6" key={index}>
									{portfolio.images.map((image, index2) => (
										<NextImage
											src={image.src || "/no-image.png"}
											alt={image.alt || "Image"}
											className="aspect-square hover:max-w-full z-20 transition-all duration-300 flex justify-center"
											imageClassName="object-cover transition-all duration-300"
											key={index2}
											onClick={() => openDialog(index2, index)}
										/>
									))}
								</div>
							</div>
						</div>
					))}
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
		</div>
	);
}
