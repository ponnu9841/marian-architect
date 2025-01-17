type ReactChildren = {
	children: React.ReactNode;
};

type WorkCardProps = {
	image: string;
	heading: string;
	category: string;
	style: string
}

type Service = {
	icon: string;
	title: string;
	description: string;
	image: string;
};

type BannerProps = {
	title: string;
	description?: string;
}