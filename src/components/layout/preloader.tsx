import React, { useEffect, useRef } from "react";
import { Teko } from "next/font/google";

const teko = Teko({ subsets: ['latin'] })

export default function PreLoader() {
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const preloaderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setTimeout(() => {
			loaderRef.current!.classList.add("isdone");
			preloaderRef.current!.classList.add("isdone");
		}, 1000);
	}, []);
	return (
		<div id="preloader" ref={preloaderRef} className={teko.className + " text-3xl"}>
			<div className="loading-text" ref={loaderRef}>
				Loading
			</div>
		</div>
	);
}
