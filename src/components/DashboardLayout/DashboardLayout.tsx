import { SideBar } from './SideBar';
import Navbar from './Navbar';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="md:flex">
      <SideBar />
      <div className="bg-[#F2F2F2] p-5 md:px-12 w-full md:pt-8 h-screen overflow-y-scroll overflow-x-hidden">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
