import CampaignAccordion from "./CampaignAccordion";

export default function ActiveCampaign() {
  return (
    <>
      <div className="space-y-3">
        <h3 className="pl-1 text-xl font-bold tracking-normal text-black">
          Active Campaigns:
        </h3>
        <div className="">
          <CampaignAccordion />
        </div>
      </div>
    </>
  );
}
