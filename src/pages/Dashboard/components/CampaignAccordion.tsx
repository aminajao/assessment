import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ListKPICardCampaign from "./ListKPICardCampaign";
import LineCharts from "./LineChart";

export type KPIType = {
  title: string;
  icon: string;
  value: number;
};

type ActiveCampaignType = {
  title: string;
  kpiData: KPIType[];
  value: number;
};

const activeCampaignData: ActiveCampaignType[] = [
  {
    title: "Head of Marketing - 0623",
    kpiData: [
      {
        title: "Active Days",
        icon: "/assets/history.svg",
        value: 17,
      },
      {
        title: "Total Candidates",
        icon: "/assets/user.svg",
        value: 247,
      },
      {
        title: "Candidates Replied",
        icon: "/assets/messaging.svg",
        value: 39,
      },
      {
        title: "Interviews Booked",
        icon: "/assets/calendar.svg",
        value: 25,
      },
    ],
    value: 17,
  },
  {
    title: "CS (CS Experience)",
    kpiData: [
      {
        title: "Active Days",
        icon: "/assets/history.svg",
        value: 17,
      },
      {
        title: "Total Candidates",
        icon: "/assets/user.svg",
        value: 247,
      },
      {
        title: "Candidates Replied",
        icon: "/assets/messaging.svg",
        value: 39,
      },
      {
        title: "Interviews Booked",
        icon: "/assets/calendar.svg",
        value: 25,
      },
    ],
    value: 17,
  },
  {
    title: "CS (Consulting Experience)",
    kpiData: [
      {
        title: "Active Days",
        icon: "/assets/history.svg",
        value: 17,
      },
      {
        title: "Total Candidates",
        icon: "/assets/user.svg",
        value: 247,
      },
      {
        title: "Candidates Replied",
        icon: "/assets/messaging.svg",
        value: 39,
      },
      {
        title: "Interviews Booked",
        icon: "/assets/calendar.svg",
        value: 25,
      },
    ],
    value: 17,
  },
  {
    title: "Senior Data Engineer - 0823",
    kpiData: [
      {
        title: "Active Days",
        icon: "/assets/history.svg",
        value: 17,
      },
      {
        title: "Total Candidates",
        icon: "/assets/user.svg",
        value: 247,
      },
      {
        title: "Candidates Replied",
        icon: "/assets/messaging.svg",
        value: 39,
      },
      {
        title: "Interviews Booked",
        icon: "/assets/calendar.svg",
        value: 25,
      },
    ],
    value: 17,
  },
];

export default function CampaignAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      {activeCampaignData.map((data, index) => (
        <AccordionItem
          className="mb-2 border-none"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="px-5 bg-white rounded-md hover:no-underline">
            {data.title}
          </AccordionTrigger>
          <AccordionContent className="p-4 md:p-8 bg-[#EFF0F0] border border-t-0 border-gray-200 rounded-b-md">
            <div className="w-full mx-auto space-y-6">
              <div className="">
                <ListKPICardCampaign KPIData={data.kpiData} />
              </div>
              <div className="">
                <LineCharts />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
