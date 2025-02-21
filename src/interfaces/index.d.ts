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
  id: string;
  image: string;
  alt?: string | null;
  title: string;
  short_description: string | null;
  long_description: string | null;
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
  alt?: string | null;
};

type Contact = {
  id: string;
  location: string;
  contactno_one: string;
  contactno_two: string | null;
  email_one: string;
  email_two: string | null;
};

type About = {
  id: string;
  image: string;
  alt?: string | null;
  title: string;
  title_badge: string;
  short_description: string;
  long_description: string | null;
}
