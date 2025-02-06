"use client";

import React, { useRef, useEffect, useState } from "react";

interface ScrollableSectionProps {
	children: React.ReactNode;
	backgroundColor?: string;
}

export default function ScrollableSection({
	children,
}: ScrollableSectionProps) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsSticky(!entry.isIntersecting); // Sticky when not intersecting
			},
			{ threshold: 0 } // Trigger as soon as it touches the top
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<div className={`relative bg-[url(/background-2.jpg)] bg-cover bg-center`}>
			<div ref={sectionRef} className="h-0"></div>{" "}
			{/* Empty div to track when top reaches viewport */}
			<div
				className={`${
					isSticky ? "fixed top-0 left-0 right-0" : "relative"
				} h-screen overflow-y-auto`}
			>
				{React.Children.map(children, (child, index) => (
					<div key={index} className="min-h-screen flex justify-center items-center">
						{child}
					</div>
				))}
			</div>
		</div>
	);
}
