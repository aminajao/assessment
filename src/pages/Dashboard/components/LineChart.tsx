"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", contacted: 186, replied: 80, interviews: 100 },
  { month: "February", contacted: 305, replied: 200, interviews: 150 },
  { month: "March", contacted: 237, replied: 120, interviews: 200 },
  { month: "April", contacted: 73, replied: 190, interviews: 250 },
  { month: "May", contacted: 209, replied: 130, interviews: 300 },
  { month: "June", contacted: 214, replied: 140, interviews: 350 },
];

const chartConfig = {
  contacted: {
    label: "Candidates Contacted",
    color: "#F98039",
  },
  replied: {
    label: "Candidates Replied",
    color: "#A5ABB3",
  },
  interviews: {
    label: "Interviews Booked",
    color: "#162C6A",
  },
} satisfies ChartConfig;

type PayloadType = {
  color: string;
  dataKey: string;
  fill: string;
  hide: boolean;
  name: string;
  payload: {
    month: string;
    contacted: number;
    replied: number;
    interviews: number;
  };
  stroke: string;
  strokeWidth: number;
  value: number;
};

type DataType = {
  contacted: { label: string; color: string };
  replied: { label: string; color: string };
  interviews: { label: string; color: string };
};

function CustomTooltipContent({
  active,
  payload,
}: {
  active: boolean;
  payload: PayloadType[];
}) {
  return (
    <div className="p-3 bg-white border border-gray-200 rounded-md">
      {active &&
        payload &&
        payload.map((item) => {
          const key = item.dataKey as keyof DataType;
          return (
            <div key={item.dataKey} className="flex flex-col mb-1 space-y-1">
              <div className="">
                <p
                  className="text-xs font-normal tracking-normal"
                  style={{ color: `${chartConfig[key].color}` }}
                >
                  {chartConfig[key].label}
                </p>
                <p className="">{item.value}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default function LineCharts() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Last 30 days:</CardDescription>
      </CardHeader>
      <CardContent className="pl-2 pr-5">
        <ChartContainer className="max-h-[200px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              label={{
                value: "No of conversations",
                angle: -90,
                position: "insideCenter",
              }}
            />
            <ChartTooltip cursor={false} content={<CustomTooltipContent />} />
            <Line
              dataKey="contacted"
              type="linear"
              stroke="var(--color-contacted)"
              strokeWidth={2}
            />
            <Line
              dataKey="replied"
              type="linear"
              stroke="var(--color-replied)"
              strokeWidth={2}
            />
            <Line
              dataKey="interviews"
              type="linear"
              stroke="var(--color-interviews)"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
