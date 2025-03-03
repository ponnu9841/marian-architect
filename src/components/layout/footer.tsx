import NextImage from "@/components/ui/Image";
import {
	FaSquareFacebook,
	FaSquareInstagram,
	FaLinkedin
} from "react-icons/fa6";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { services } from "@/dummy-data";
import FooterContact from "./footer-contact";
import LogoText from "./logo-text";

const productLinks = [
	"Elementor Guru",
	"WooLentor Pro",
	"Plugins",
	"Page Builder",
];

const aboutLinks = [
	"Features",
	"Our Partners",
	"Affiliate Programs",
	"Pricing",
];

export default function Footer() {
	return (
		<footer className="flex justify-center w-full max-w-full relative bg-background">
			<div className="w-full">
				<Separator />
				<div className="container pt-20 pb-6 w-full">
					<div className="flex flex-wrap gap-8 mb-16">
						<div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]">
							<div className="flex space-x-4 items-center">
								<NextImage
									src="/logo.webp"
									className="aspect-square max-w-[100px] max-h-[100px]"
								/>
								<LogoText />
							</div>
							<FooterContact />
							<div className="mt-8 flex gap-x-2">
								<div>
									<Link href="https://www.facebook.com/share/1ErxkVj6Sz/?mibextid=wwXIfr" target="_blank">
										<FaSquareFacebook
											size={25}
											className="text-muted-foreground hover:text-primary transition-all duration-300"
										/>
									</Link>
								</div>
								<div>
									<Link href="https://www.instagram.com/marian.architecture.studio/profilecard/?igsh=ZWFrMWJubTc1cWl2" target="_blank">
										<FaSquareInstagram
											size={25}
											className="text-muted-foreground hover:text-primary transition-all duration-300"
										/>
									</Link>
								</div>
								<div>
									<Link href="https://www.linkedin.com/in/ar-akhil-johny-5bb065117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
										<FaLinkedin
											size={25}
											className="text-muted-foreground hover:text-primary transition-all duration-300"
										/>
									</Link>
								</div>
							</div>
						</div>
						<div className="w-full md:w-[calc(50%-1rem)] lg:flex-1 lg:flex gap-6">
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
						</div>
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
