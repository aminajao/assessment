import { KPIType } from "./CampaignAccordion";
import KPICard from "./KPICard";

type ListKPICardCampaignProps = {
  KPIData: KPIType[];
};

export default function ListKPICardCampaign({ KPIData }: ListKPICardCampaignProps) {
  return (
    <>
      <div className="kpi-cards-container grid gap-4">
        {KPIData.map((kpi, index) => (
          <KPICard
            className="mb-3 pl-4 pr-1"
            key={index}
            icon={kpi.icon}
            title={kpi.title}
            value={kpi.value}
          />
        ))}
      </div>
    </>
  );
}
