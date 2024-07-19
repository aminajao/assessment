import Chart from "./Chart";


type ChartDataType = {
  footer: string;
  startAngle: number;
  endAngle: number;
  percentage?: boolean;
  chartData: { browser: string; candidates: number | string; fill: string }[];
};

const chartData: ChartDataType[] = [
  {
    footer: "ø Candidates per Campaign",
    startAngle: 90,
    endAngle: -360,
    chartData: [{ browser: "safari", candidates: 120, fill: "#F97F39" }],
  },
  {
    footer: "ø Connection Rate",
    startAngle: 90,
    endAngle: -160,
    percentage: true,
    chartData: [{ browser: "safari", candidates: 65, fill: "#394F8E" }],
  },
  {
    footer: "ø Response Rate",
    startAngle: 90,
    endAngle: 0,
    percentage: true,
    chartData: [{ browser: "safari", candidates: 25, fill: "#40AABF" }],
  },
  {
    footer: "ø Interview Rate",
    startAngle: 90,
    endAngle: 60,
    percentage: true,
    chartData: [{ browser: "safari", candidates: 5, fill: "#43A854" }],
  },
];

export default function CampaignPerformance() {
  return (
    <>
      <div className="space-y-3">
        <h3 className="pl-1 text-xl font-bold tracking-normal text-black">
          Average Campaign Performance
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-0 lg:flex">
          {chartData.map((chart, index) => (
            <Chart
              key={index}
              startAngle={chart.startAngle}
              endAngle={chart.endAngle}
              footer={chart.footer}
              percentage={chart.percentage}
              chartData={chart.chartData}
            />
          ))}
        </div>
      </div>
    </>
  );
}
