import { useState } from 'react';
import CampaignCard from './components/CampaignCard';
import CampaignOverview from './components/CampaignOverview';
import { DashboardLayout } from '@/components/DashboardLayout/DashboardLayout';
import { CampaignData, campaigns } from '@/constants/index';
import Header from '@/components/ui/header';

const Campaigns = () => {
  const [open, setOpen] = useState(0);

  return (
    <DashboardLayout>
      <Header
        title="Your Campaigns"
        text="Always stay ahead of your campaigns!"
      />
      <div className={`${open ? '' : 'mt-10'} mb-10`}>
        {open === 0 ? null : (
          <div className="hide w-full text-right">
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
            <div className="hide">
              <h2 className="text-[#0D1A26] text-xl font-bold mb-8">
                Head of Marketing - Campaign Overview{' '}
                <span className="text-xl font-normal">
                  (Total Campaigns: 4)
                </span>
              </h2>
            </div>
          )}
        </div>
        <div
          className={`${
            open ? 'grid grid-cols-11' : ''
          } campaign-overall-container`}
        >
          <div
            className={`${
              open
                ? 'pr-5 pb-10 overflow-y-scroll col-span-5 campaigns-container__open'
                : ''
            } grid  gap-20 campaigns-container`}
          >
            {campaigns.map((campaign: CampaignData) => (
              <CampaignCard
                onClick={() => setOpen(campaign.id)}
                key={campaign.id}
                // @ts-expect-error ignore
                data={campaign}
                open={open}
              />
            ))}
          </div>
          <>
            {open === 0 ? null : (
              <div className="hide-up w-full text-left">
                <button
                  onClick={() => setOpen(0)}
                  className="border-2 py-2 px-3 rounded-md mb-3"
                >
                  Close
                </button>
              </div>
            )}
            {open === 0 ? null : (
              <div className="hide-up">
                <h2 className="text-[#0D1A26] text-xl font-bold mb-8">
                  Head of Marketing - Campaign Overview{' '}
                  <span className="text-xl font-normal">
                    (Total Campaigns: 4)
                  </span>
                </h2>
              </div>
            )}
            <div
              className={`${
                open
                  ? 'lg:border-l border-[#858c9469] col-span-6 lg:pl-8'
                  : 'hidden'
              }`}
            >
              {[1, 2, 3, 4].map(() => (
                <CampaignOverview />
              ))}
              <button className="bg-[#D0D2DA26] w-full py-4 rounded-lg">
                Create new
              </button>
            </div>
          </>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
