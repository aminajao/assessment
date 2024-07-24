import KPICard from "./KPICard";

type KPIType = {
  title: string;
  icon: string;
  value: number;
};

const KPIData: KPIType[] = [
  {
    title: "Active Campaigns",
    icon: "/assets/Inbox.svg",
    value: 5,
  },
  {
    title: "Upcoming Interviews",
    icon: "/assets/calendar.svg",
    value: 25,
  },
];

export default function ListKPICard() {
  return (
    <>
      <div className="flex md:items-center space-x-4 flex-row">
        {/* <div className="flex space-x-0 space-y-4 md:items-center md:space-y-0 md:space-x-8 flex-row"> */}
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
