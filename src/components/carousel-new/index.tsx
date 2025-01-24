"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const carouselItems = [
	{
		id: 1,
		image: "/banner-1.jpg",
		author: "LUNDEV",
		title: "DESIGN SLIDER",
		topic: "ANIMAL",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
	},
	{
		id: 2,
		image: "/banner-2.jpg",
		author: "LUNDEV",
		title: "DESIGN SLIDER 2",
		topic: "ANIMAL",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
	},
	{
		id: 3,
		image: "/banner-3.jpg",
		author: "LUNDEV",
		title: "DESIGN SLIDER 3",
		topic: "ANIMAL",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
	},
	{
		id: 4,
		image: "/banner-4.jpg",
		author: "LUNDEV",
		title: "DESIGN SLIDER 4",
		topic: "ANIMAL",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
	},
];

export default function Carousel() {
	const [items, setItems] = useState(carouselItems);
	// const [isNext, setIsNext] = useState(true);
	const carouselRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const autoNextRef = useRef<NodeJS.Timeout | null>(null);

	const showSlider = (type: "next" | "prev") => {
		// setIsNext(type === "next");
		setItems((prevItems) => {
			if (type === "next") {
				return [...prevItems.slice(1), prevItems[0]];
			} else {
				return [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];
			}
		});

		if (carouselRef.current) {
			carouselRef.current.classList.add(type);
		}

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			if (carouselRef.current) {
				carouselRef.current.classList.remove("next", "prev");
			}
		}, 500);

		if (autoNextRef.current) {
			clearTimeout(autoNextRef.current);
		}
		autoNextRef.current = setTimeout(() => {
			showSlider("next");
		}, 7000);
	};

	useEffect(() => {
		autoNextRef.current = setTimeout(() => {
			showSlider("next");
		}, 7000);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			if (autoNextRef.current) clearTimeout(autoNextRef.current);
		};
	}, []);

	return (
		<div className="carousel" ref={carouselRef}>
			<div className="list">
				{items.map((item, index) => (
					<div key={index} className="item">
						{/* eslint-disable-next-line */}
						<img src={item.image} alt="" className="max-w-full" />
						
					</div>
				))}
			</div>
			<div className="thumbnail">
				{items.map((item, index) => (
					<div key={index} className="item">
						{/* eslint-disable-next-line */}
						<img src={item.image || "/placeholder.svg"} alt={item.title} />
					</div>
				))}
			</div>
			<div className="absolute left-[23%] top-[88%]" style={{ zIndex: "100" }}>
				<Button
					size="icon"
					variant="ghost"
					id="prev"
					onClick={() => showSlider("prev")}
					className="rounded-full border border-primary"
				>
					<FaArrowLeft />
				</Button>
				<Button
					size="icon"
					variant="ghost"
					id="next"
					onClick={() => showSlider("next")}
					className="rounded-full border border-primary ml-3"
				>
					<FaArrowRight />
				</Button>
			</div>
		</div>
	);
}
