import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NextImageProps = {
	src: string;
	alt?: string;
	priority?: boolean;
	className?: string;
	imageClassName?: string;
	onClick?: () => void;
};

export default function NextImage(props: NextImageProps) {
	const { src, alt = "", className, priority = false, imageClassName, onClick } = props;
	return (
		<div className={cn("relative w-full h-full", className)} onClick={onClick}>
			<Image
				src={src}
				fill={true}
				className={cn("object-contain w-full relative", imageClassName)}
				alt={alt}
				sizes="(max-width: 768px) 100vw, 60vw"
				priority={priority}
			/>
		</div>
	);
}
