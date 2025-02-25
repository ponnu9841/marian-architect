import AnimateText from "@/components/amination/text";
import TitleBadge from "@/components/title-badge";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/Image";
// import ParallaxTiltMultiple from "@/components/ui/parallax/parallax-multiple";
// import { aboutData } from "@/dummy-data";
import parse from "html-react-parser";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { useRouter } from "next/router";

export default function About({ aboutData }: { aboutData: About }) {
  const router = useRouter();
  return (
    <section id="about">
      <div className="container relative pt-10 md:pt-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 max-w-[550px]">
            {/* <ParallaxTiltMultiple
							leftImage="/works/1.jpg"
							rightImage="/portfolio.webp"
						/> */}
            <NextImage
              src="/works/1.jpg"
              className="aspect-square"
              imageClassName="object-cover"
            />
          </div>
          <div className="flex-1">
            <TitleBadge title="About Us" />
            <h2 className="text-3xl xl:text-5xl mt-3 mb-2">
              <AnimateText text="What We Do" />
            </h2>
            <motion.div
              className="text-muted-foreground mb-4 text-base"
              initial={{ y: 50, filter: "blur(5px)" }}
              whileInView={{ y: 0, filter: "blur(0)" }}
              transition={{ duration: 1, delay: 1 / 10 }}
            >
              {router.pathname === "/about" ? (
                <div>
                  {parse(aboutData.long_description || "")}
                </div>
              ) : (
                parse(aboutData.short_description || "")
              )}
            </motion.div>
            {router.pathname === "/" && (
              <motion.div
                className="mt-8"
                initial={{ y: 50, filter: "blur(5px)" }}
                whileInView={{ y: 0, filter: "blur(0)" }}
                transition={{ duration: 1, delay: 1 / 13 }}
              >
                <Link href="/about">
                  <Button size="lg" className="flex items-center">
                    <span>Read More</span>
                    <Plus />
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
