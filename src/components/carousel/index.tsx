// "use client";

import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { RenderCarouselItem } from "./carousel-item";
import { cn } from "@/lib/utils";
import Heading from "@/components/heading";

const CarouselSlider = (props: CarouselSliderProps) => {
	const {
		images,
		carouselClassName,
		carouselContentClassName,
		carouselItemClassName,
		cardContentClassName,
		cardClassName,
		children,
		orientation = "horizontal",
		id,
		showTitle = false,
		enableScroll = false,
		showArrow = true,
		customArrow,
	} = props;
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

	const opts = {
		loop: true,
	};

	const hasPadding = carouselItemClassName?.includes("pl-");
	let paddingValue = 0;
	if (hasPadding) {
		paddingValue = parseInt(carouselItemClassName?.split("pl-")[1] || "0") || 0;
	}

	const carousel = useRef<HTMLDivElement>(null);
	const [api, setApi] = useState<any>(null); //eslint-disable-line

	useEffect(() => {
		if (!api) return;

		const handleScroll = (event: WheelEvent) => {
			event.preventDefault();
			if (event.deltaY > 0) {
				api.scrollNext();
			} else {
				api.scrollPrev();
			}
		};

		const currentCarousel = carousel.current;
		if (currentCarousel && enableScroll) {
			currentCarousel.addEventListener("wheel", handleScroll, {
				passive: false,
			});
		}

		return () => {
			if (currentCarousel) {
				currentCarousel.removeEventListener("wheel", handleScroll);
			}
		};
	}, [api]); //eslint-disable-line

	return (
		<Carousel
			plugins={[plugin.current]}
			className={cn("w-full relative carousel", carouselClassName)}
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
			id={id || "carousel-slider"}
			orientation={orientation}
			opts={opts}
			ref={carousel}
			setApi={setApi}
		>
			<CarouselContent
				className={cn(
					"carousel-content",
					`${paddingValue ? "-ml-" + paddingValue : "m-0"}`,
					carouselContentClassName
				)}
			>
				{images?.map((image, index) => (
					<RenderCarouselItem
						key={index}
						cardContentClassName={cardContentClassName}
						carouselItemClassName={carouselItemClassName}
						cardClassName={cardClassName}
					>
						<Image
							src={image.image}
							fill
							alt="banner"
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 60vw"
							priority={index === 0}
						/>
						{!!children && children}
						{showTitle && (
							<>
								<div className="absolute inset-0 bg-black/50"></div>
								<div className="absolute top-1/2 -translate-y-1/2 left-0 px-10 md:px-32 text-white">
									<Heading title={image.title} variant="h1" />
									<p className="max-w-2xl mt-2 text-base">
										{image.description}
									</p>
								</div>
							</>
						)}
					</RenderCarouselItem>
				))}
				{!!!images && <>{!!children && children}</>}
			</CarouselContent>
			{customArrow && customArrow}
			{showArrow && (children || (images && images.length > 1)) && (
				<>
					<CarouselPrevious className="left-8 z-3" />
					<CarouselNext className="right-8 z-3" />
				</>
			)}
		</Carousel>
	);
};

export default CarouselSlider;
