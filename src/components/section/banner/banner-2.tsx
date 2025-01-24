import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/Image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React from "react";

export const data = [
	{
		image: "/banner-1.jpg",
		title: "Convenient Home Lab Testing",
		description:
			"Experience the comfort of professional lab testing without leaving your home. ACCESS brings certified phlebotomists to your doorstep in Calicut, Ernakulam, Palakkad, and Thrissur.",
	},
	{
		image: "/banner-2.jpg",
		title: "Comprehensive Health Checkups",
		description:
			"From COVID-19 tests to full body health packages, ACCESS offers a wide range of essential medical tests. Take control of your health with our convenient and reliable services.",
	},
	{
		image: "/banner-3.jpg",
		title: "Fast, Secure Results",
		description:
			"Your health information matters. Receive your test results quickly and securely via email or WhatsApp. Trust ACCESS for accurate, timely, and confidential lab testing.",
	},
];

export default function Banner() {
	// const [currentImage, setCurrentImage] = useState(data[0].image);
	// const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrev = () => {
		console.log("prev");
	};
	const handleNext = () => {
		console.log("next");
	};


	return (
		<div className="carousel relative min-h-screen w-full overflow-hidden">
			<div className="list">
				{/* loop */}
				{data.map((item, index) => (
					<div
						className={`item absolute w-full h-full inset-0 ${
							index == 0 ? "z-10 next" : ""
						}`}
						key={index}
					>
						<NextImage src={item.image} imageClassName="object-cover" />
					</div>
				))}

				<div className="absolute left-[23%] bottom-16 z-10">
					<Button
						size="icon"
						variant="ghost"
						className="rounded-full border border-2 border-primary"
						onClick={handlePrev}
					>
						<FaArrowLeft />
					</Button>
					<Button
						size="icon"
						variant="ghost"
						className="ml-2 rounded-full border border-2 border-primary"
						onClick={handleNext}
					>
						<FaArrowRight />
					</Button>
				</div>

				{/* thumbnail */}
				<div className="absolute bottom-[50px] left-1/2 w-[150px] w-max z-10 flex gap-6">
					<NextImage
						src="/banner-2.jpg"
						className="w-[150px] h-[220px] shrink-0 relative cursor-pointer"
						imageClassName="object-cover w-full h-full rounded"
					/>
				</div>
			</div>
		</div>
	);
}
