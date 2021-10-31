import React from 'react'
import DashboardButtons from '../components/Dashboard/DashboardButtons';
import DashboardCardSlider from '../components/Dashboard/DashboardCardSlider';
import DashboardExpenses from '../components/Dashboard/DashboardExpenses';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardTable from '../components/Dashboard/DashboardTable';

const DashboardPage: React.FC = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <DashboardButtons />
      <DashboardCardSlider />
      <DashboardExpenses />
      <DashboardTable />
    </div>
  )
}

export default DashboardPage;
