import DashBoardLayout from '@/components/layout/dashboard/dashboard-layout';
import React from 'react'

export default function AboutPage() {
  return (
    <div>AboutPage</div>
  )
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return <DashBoardLayout>{page}</DashBoardLayout>;
};
