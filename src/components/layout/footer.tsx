import NextImage from "@/components/ui/Image";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
// import { services } from "@/dummy-data";
import FooterContact from "./footer-contact";
import LogoText from "./logo-text";

// const productLinks = [
// 	"Elementor Guru",
// 	"WooLentor Pro",
// 	"Plugins",
// 	"Page Builder",
// ];

// const aboutLinks = [
// 	"Features",
// 	"Our Partners",
// 	"Affiliate Programs",
// 	"Pricing",
// ];

export default function Footer() {
	return (
		<footer className="flex justify-center w-full max-w-full relative bg-background">
			<div className="w-full">
				<Separator />
				<div className="container pt-20 pb-6 w-full">
					<div className="flex flex-wrap justify-between mb-16">
						{/* <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]"> */}
							<div className="flex space-x-4 items-center min-w-[300px] lg:min-w-[380px]">
								<NextImage
									src="/logo.webp"
									className="aspect-square max-w-[100px] max-h-[100px]"
								/>
								<LogoText />
							</div>
							<FooterContact />
							
						{/* </div> */}
						{/* <div className="w-full md:w-[calc(50%-1rem)] lg:flex-1 lg:flex gap-6">
							<div className="lg:flex-1">
								<div className="text-xl font-normal md-3 md:mb-4">Services</div>
								{services.map((service, index) => (
									<div key={index} className="mb-3">
										<Link
											href="/services"
											className="hover:text-primary transition-all duration-300"
										>
											{service.title}
										</Link>
									</div>
								))}
							</div>
							<div className="lg:flex-1">
								<div className="text-xl font-normal md-3 md:mb-4">Products</div>
								{productLinks.map((item, index) => (
									<div key={index} className="mb-3">
										<Link
											href="#"
											target="_blank"
											className="hover:text-primary transition-all duration-300"
										>
											{item}
										</Link>
									</div>
								))}
							</div>
							<div className="lg:flex-1">
								<div className="text-xl font-normal md-3 md:mb-4">About</div>
								{aboutLinks.map((item, index) => (
									<div key={index} className="mb-3">
										<Link
											href="#"
											target="_blank"
											className="hover:text-primary transition-all duration-300"
										>
											{item}
										</Link>
									</div>
								))}
							</div>
						</div> */}
					</div>
					<Separator />
					<div className="flex justify-center mt-6">
						<div>
							© 2025 Marian Architect Developed by{" "}
							<Link
								href="https://towninmedia.com"
								target="_blank"
								className="hover:text-primary transition-all duration-300"
							>
								Towninmedia
							</Link>
							.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
