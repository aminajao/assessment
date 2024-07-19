import { useState } from 'react';
import CampaignCard from '@/components/CampaignCard';
import CampaignOverview from '@/components/CampaignOverview';
import { DashboardLayout } from '@/components/DashboardLayout/DashboardLayout';
import { CampaignData, campaigns } from '@/constants/index';

const Campaigns = () => {
  const [open, setOpen] = useState(0);

  return (
    <DashboardLayout>
      <h1>Your Campaigns</h1>
      <p className="mb-10">Always stay ahead of your campaigns!</p>
      <div className="mb-10">
        {open === 0 ? null : (
          <div className="w-full text-right">
            <button
              onClick={() => setOpen(0)}
              className="border py-2 px-3 rounded-md mb-2"
            >
              Close
            </button>
          </div>
        )}

        <div className="flex justify-between">
          <h2 className="text-[#0D1A26] text-xl font-bold mb-8">
            Active Positions{' '}
            <span className="text-xl font-normal">(Total: 8)</span>
          </h2>
          {open === 0 ? null : (
            <div>
              <h2>
                Head of Marketing - Campaign Overview (Total Campaigns: 4)
              </h2>
            </div>
          )}
        </div>
        <div className={`${open ? 'grid grid-cols-11' : ''}`}>
          <div
            className={`${
              open
                ? 'pr-10 pb-10 col-span-5 grid-cols-2 overflow-y-scroll h-[36rem]'
                : 'sm:grid-cols-2 md:grid-cols-4 mx-10'
            } grid  gap-10`}
          >
            {campaigns.map((campaign: CampaignData) => (
              <CampaignCard
                onClick={() => setOpen(campaign.id)}
                key={campaign.id}
                data={campaign}
                open={open}
              />
            ))}
          </div>
          <div
            className={`${
              open ? 'border-l border-[#858c9469] col-span-6 pl-8' : 'hidden'
            }`}
          >
            {[1, 2, 3, 4].map(() => (
              <CampaignOverview />
            ))}
            <button className="bg-[#D0D2DA26] w-full py-4 rounded-lg">
              Create new
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
