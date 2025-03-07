import Heading from "@/components/heading";
import Layout from "@/components/layout";
import Banner from "@/components/section/banner";
import NextImage from "@/components/ui/Image";
import { getPageFetchData } from "@/utils/pageFetchData";
import parse from "html-react-parser";
import React from "react";

interface ServicePageProps {
   services: Service[] | [];
}

export async function getStaticProps() {
   const data = await getPageFetchData(["/service"]);

   if (!data) {
	  return { props: { error: "Error fetching data" } };
   }

   const [services] = data;

   return {
	  props: { services },
	  revalidate: +(process.env.NEXT_REVALIDATE_SECONDS || 3600*24),
   };
}

export default function Services(props: ServicePageProps) {
   const { services } = props;
   return (
      <>
         <Banner title="Services" />
         <div className="container py-24 relative bg-background z-[3] bg-background">
            <div className="absolute h-full w-full -top-[100px] left-0 z-[2]"></div>

            <div className="relative z-[3] bg-background">
               {services?.map((service, index) => (
                  <div
                     className="flex flex-col md:flex-row items-center gap-6 mt-12"
                     key={index}
                  >
                     <NextImage
                        className={`aspect-square w-full md:w-1/3 ${
                           index % 2 === 0 ? "md:order-2" : ""
                        }`}
                        src={service.image}
                        imageClassName="object-cover"
                     />
                     <div className="w-full md:w-2/3">
                        <Heading title={service.title} variant="h2" />
                        {parse(service.short_description || "")}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}

Services.getLayout = function getLayout(page: React.ReactElement) {
   return <Layout>{page}</Layout>;
};

// export async function getServerSideProps() {
// 	try {
// 	  const services = await axiosClient.get("/service");

// 	  return {
// 		props: {
// 		  services: services.data.data,
// 		},
// 	  };
// 	} catch (error) {
// 	  console.error("Error fetching data:", error);

// 	  // Handle the error appropriately, e.g., redirect to an error page
// 	  return {
// 		props: {
// 		  error: "Error fetching Data",
// 		},
// 	  };
// 	}
//   }
