import { KPIType } from "./CampaignAccordion";
import KPICard from "./KPICard";

type ListKPICardCampaignProps = {
  KPIData: KPIType[];
};

export default function ListKPICardCampaign({ KPIData }: ListKPICardCampaignProps) {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-4">
        {KPIData.map((kpi, index) => (
          <KPICard
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
