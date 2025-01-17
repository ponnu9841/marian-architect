import Layout from '@/components/layout';
import About from '@/components/section/about';
import Banner from '@/components/section/banner';
import React from 'react'

export default function AboutPage() {
  return (
    <div>
        <Banner />
        <About />
    </div>
  )
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};