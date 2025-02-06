import { useEffect, useRef, useState } from "react";
import NextImage from "../ui/Image";
import Link from "next/link";
// import { ThemeToggle } from "./ThemeToggle";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/router";
import LogoText from "./logo-text";

const navItems = [
	{ name: "Home", link: "/" },
	{ name: "Portfolio", link: "/portfolio" },
	{ name: "Services", link: "/services" },
	{ name: "About", link: "/about" },
	{ name: "Contact", link: "/contact" },
];

export default function Header() {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	useEffect(() => {
		// const windowHeight = window.innerHeight;
		const handleScroll = () => {
			if (headerRef.current) {
				// const topHeight = 0.65 * windowHeight;
				const classes = ["shadow-md", "border-none", "bg-background"];
				if (window.scrollY > 0) {
					headerRef.current.classList.add(...classes);
				} else {
					headerRef.current.classList.remove(
						...classes,
						"border-b",
						"borer-gray-500"
					);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header className="bg-transparent z-100 ">
			{/* <InfoBar /> */}
			<div
				ref={headerRef}
				className="w-full z-50 fixed top-0 left-0 w-full"
			>
				<nav className="flex items-center gap-4 justify-between w-full h-full container">
					<Link href="/" className="flex justify-start items-center space-x-2">
						<NextImage
							src="/logo.png"
							alt="logo"
							className="aspect-square w-[90px] h-[90px]"
						/>
						<LogoText />
					</Link>
					<div className="flex items-center">
						<ul className="flex items-center gap-6">
							{navItems.map((item, index) => (
								<li
									key={index}
									className="flex justify-center items-center hidden md:block"
								>
									<Link
										key={item.name}
										href={item.link}
										className={`inline-flex items-center px-1 text-base tracking-wider hover:text-primary trnsition-all duration-300 ${
											router.pathname === item.link ? "text-primary" : ""
										}`}
									>
										{item.name}
									</Link>
								</li>
							))}
							{/* <div className="ml-5">
								<ThemeToggle />
							</div> */}
						</ul>
						<div className="md:hidden flex items-center z-50">
							<Sheet open={isOpen} onOpenChange={setIsOpen}>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="hover:bg-transparent"
									>
										<Menu className="h-6 w-6" />
										<span className="sr-only">Open main menu</span>
									</Button>
								</SheetTrigger>
								<SheetContent
									side="right"
									className="w-[240px] sm:w-[300px]"
									aria-describedby={undefined}
								>
									<SheetTitle aria-describedby={undefined}></SheetTitle>
									<div className="flex flex-col gap-4">
										{navItems.map((item) => (
											<Link
												key={item.name}
												href={item.link}
												className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium"
												onClick={() => setIsOpen(false)}
											>
												{item.name}
											</Link>
										))}
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
