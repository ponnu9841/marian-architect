import axiosClient from "@/axios/axios-client";
import Layout from "@/components/layout";
import About from "@/components/section/about";
import Banner from "@/components/section/banner";
import React from "react";

interface AboutPageProps {
  about: About | null;
}

export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <Banner title="About Us" />
      {props.about && <About aboutData={props.about} />}
    </div>
  );
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const about = await axiosClient.get("/about");

    return {
      props: {
        about: about.data.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Handle the error appropriately, e.g., redirect to an error page
    return {
      props: {
        error: "Error fetching Data",
      },
    };
  }
}
