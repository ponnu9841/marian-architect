import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import NextImage from "@/components/ui/Image";
import Link from "next/link";

export function Logo() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Link href="/dashboard">
					<NextImage
						src="/logo.webp"
						className="aspect-square max-w-[80px]"
					/>
				</Link>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
