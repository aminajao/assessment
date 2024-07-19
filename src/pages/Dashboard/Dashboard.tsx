import { DashboardLayout } from "@/components/DashboardLayout/DashboardLayout";
import Header from '../../components/ui/Header';
import ListKPICard from './components/ListKPICard';
import CampaignPerformance from './components/CampaignPerformance';
import ActiveCampaign from './components/ActiveCampaign';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <section className="mt-14">
        <div className="">
          <Header title="Dashboard" text="It’s looking like an awesome day!" />
        </div>
        <div className="my-6">
          <ListKPICard />
        </div>
        <div className="my-6">
          <CampaignPerformance />
        </div>
        <div className="my-6">
          <ActiveCampaign />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
