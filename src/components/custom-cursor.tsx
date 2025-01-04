import React, { useEffect, useState } from "react";

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseEnter = () => setVisible(true);
		const handleMouseLeave = () => setVisible(false);

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div>
			<div
				className="mouse-cursor cursor-outer"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					visibility: visible ? "visible" : "hidden",
				}}
			></div>
			<div
				className="mouse-cursor cursor-inner"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					visibility: visible ? "visible" : "hidden",
				}}
			></div>
		</div>
	);
};

export default CustomCursor;
