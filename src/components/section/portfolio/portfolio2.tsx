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
import { Button } from "@/components/ui/button";
// import CarouselSlider from "@/components/carousel";

const gridClasses = (width: number) => {
  return [
    `col-span-6 lg:col-span-1 lg:row-span-2 aspect-square`,
    `col-span-6 lg:col-span-2 max-h-[200px] overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-1 max-h-[200px] overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-1 lg:row-span-2 overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-1 lg:row-span-2 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-1 lg:row-span-3 overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-2 lg:row-span-1 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-1 lg:row-span-2 overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-1 lg:row-span-1 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-1 lg:row-span-2 overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-2 lg:row-span-1 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-1 lg:row-span-2 overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-1 lg:row-span-1 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-1 lg:row-span-2 overflow-hidden aspect-square`,
    `col-span-6 lg:col-span-2 lg:row-span-2 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
    `col-span-6 lg:col-span-2 lg:row-span-2 overflow-hidden ${width < 1024 ? "aspect-square" : ""}`,
  ];
};

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);
  const [images, setImages] = useState<Portfolio[]>([]);
  const closeDialog = () => {
    setSelectedImage(null);
    setImages([]);
  };

  const dispatch = useAppDispatch();
  const { portfolio } = useAppSelector((state) => state.rootReducer.portfolio);
  const { windowSize } = useAppSelector((state) => state.rootReducer.utils);
  const windowWidth = windowSize.width;
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchPortfolio({ controller, pageNo, pageSize: 32, infinite: true }));
    return () => controller.abort();
  }, [pageNo]); //eslint-disable-line

  let groupedPortfolioArray = [];
  if (portfolio) {
    groupedPortfolioArray = chunkArray(portfolio?.data, 16);
  }
  const openDialog = (portfolios: Portfolio[], index: number) => {
    setImages(portfolios);
    setSelectedImage(portfolios[index]);
  };
  const lastPage = portfolio?.totalPages;
  const handleClick = () => {
    if (lastPage && pageNo < lastPage) {
      setPageNo(pageNo + 1);
    }
  }

  return (
    <section
      id="portfolio"
      className="px-2 mt-10 md:mt-24 mb-0 relative z-5 w-full"
    >
      <div>
        <div className="mb-4 md:mb-12">
          <SectionTitle
            title="Portfolio"
            // description="Get your company heading in the right direction with our digital marketing strategist"
          />
        </div>
        <div className="flex flex-col">
          {groupedPortfolioArray.map((portfolios, index1) => (
            <div className="grid grid-cols-6 lg:grid-rows-5 gap-1" key={index1}>
              {portfolios.map((portfolio: Portfolio, index2: number) => {
                return (
                  <NextImage
                    src={portfolio.image}
                    className={
                      gridClasses(windowWidth)[index2] ||
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
      <div className="my-6 flex justify-center">
        <Button size="lg" onClick={handleClick}>View More</Button>
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
