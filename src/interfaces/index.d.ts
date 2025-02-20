type ReactChildren = {
	children: React.ReactNode;
};

type WorkCardProps = {
	image: string;
	heading: string;
	category: string;
	style: string;
};

type Service = {
	icon: string;
	title: string;
	description: string;
	image: string;
};

type BannerProps = {
	title: string;
	description?: string;
};

type CarouselCardProps = {
	cardContentClassName?: string | undefined;
	cardClassName?: string | undefined;
	carouselItemClassName?: string | undefined;
	children?: React.ReactNode | string;
};

type CarouselSliderProps = CarouselCardProps & {
	images?: { image: string; title: string; description: string }[];
	carouselClassName?: string;
	carouselContentClassName?: string | undefined;
	orientation?: "horizontal" | "vertical" | undefined;
	id?: string;
	showTitle?: boolean;
	enableScroll?: boolean;
	showArrow?: boolean;
	customArrow?: React.ReactNode;
};

type ExtendedFile = File & {
	url: string;
};

type Banner = {
	id: string;
	image: string;
	alt?: string;
}