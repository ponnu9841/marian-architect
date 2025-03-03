import GalleryDrawerContent from "@/components/gallery-drawer-content";
// import Heading from "@/components/heading";
import SectionTitle from "@/components/section-title";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import NextImage from "@/components/ui/Image";
// import { motion } from "motion/react";
import { useEffect, useState } from "react";
// import PortfolioImage from "./portfolio-image";
// import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/Image";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchPortfolio } from "@/redux/features/portfolio-slice";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { chunkArray } from "@/utils";
// import CarouselSlider from "@/components/carousel";

const gridClasses = [
  "col-span-6 md:col-span-1 md:row-span-2 aspect-square",
  "col-span-6 md:col-span-2 max-h-[200px] overflow-hidden aspect-square",
  "col-span-6 md:col-span-1 max-h-[200px] overflow-hidden",
  "col-span-6 md:col-span-1 md:row-span-2 overflow-hidden aspect-square",
  "col-span-6 md:col-span-1 md:row-span-2 overflow-hidden",
  "col-span-6 md:col-span-1 md:row-span-3 overflow-hidden aspect-square",
  "col-span-6 md:col-span-2 md:row-span-1 overflow-hidden",
  "col-span-6 md:col-span-1 md:row-span-2 overflow-hidden aspect-square",
  "col-span-6 md:col-span-1 md:row-span-1 overflow-hidden",
  "col-span-6 md:col-span-1 md:row-span-2 overflow-hidden aspect-square",
  "col-span-6 md:col-span-2 md:row-span-1 overflow-hidden",
  "col-span-6 md:col-span-1 md:row-span-2 overflow-hidden aspect-square",
  "col-span-6 md:col-span-1 md:row-span-1 overflow-hidden",
  "col-span-6 md:col-span-1 md:row-span-2 overflow-hidden aspect-square",
  "col-span-6 md:col-span-2 md:row-span-2 overflow-hidden",
  "col-span-6 md:col-span-2 md:row-span-2 overflow-hidden",
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);
  const [images, setImages] = useState<Portfolio[]>([]);
  const closeDialog = () => {
    setSelectedImage(null);
    setImages([]);
  };

  const dispatch = useAppDispatch();
  const { portfolio } = useAppSelector((state) => state.rootReducer.portfolio);
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchPortfolio({ controller, pageSize: 32 }));
    return () => controller.abort();
  }, []); //eslint-disable-line

  let groupedPortfolioArray = [];
  if (portfolio) {
    groupedPortfolioArray = chunkArray(portfolio?.data, 16);
  }
  const openDialog = (portfolios: Portfolio[], index: number) => {
    setImages(portfolios);
    setSelectedImage(portfolios[index]);
  };

  return (
    <section id="portfolio" className="px-2 pt-10 md:pt-24 mb-0 relative z-5">
      <div>
        <div className="mb-4">
          <SectionTitle
            title="Portfolio"
            // description="Get your company heading in the right direction with our digital marketing strategist"
          />
        </div>
        <div className="flex flex-col">
          {groupedPortfolioArray.map((portfolios, index1) => (
            <div className="grid grid-cols-6 grid-rows-5 gap-1" key={index1}>
              {portfolios.map((portfolio: Portfolio, index2: number) => {
                return (
                  <NextImage
                    src={portfolio.image}
                    className={
                      gridClasses[index2] ||
                      "col-span-1 row-span-1 overflow-hidden"
                    }
                    imageClassName="object-cover h-full md:grayscale hover:grayscale-0 transition-all duration-300"
                    key={index2}
                    onClick={() => openDialog(portfolios, index2)}
                    priority={true}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Dialog open={selectedImage !== null} onOpenChange={closeDialog}>
        <DialogContent className="max-w-[90vw] w-full max-h-[90vh] h-full p-5 text-white bg-transparent border-none">
          {selectedImage !== null && (
            <GalleryDrawerContent
              images={images}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
