"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

type ChartProps = {
  footer: string;
  startAngle: number;
  endAngle: number;
  percentage?: boolean;
  chartData: { browser: string; candidates: number | string; fill: string }[];
};

const chartConfig = {
  candidates: {
    label: "Candidates",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Chart({ footer, chartData, startAngle, endAngle, percentage }: ChartProps) {
  return (
    <Card className="flex w-[220px] flex-col">
      <CardContent className="pt-2 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[150px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={60}
            outerRadius={80}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[65, 55]}
            />
            <RadialBar dataKey="candidates" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-4xl font-semibold fill-foreground"
                        >
                          {chartData[0].candidates.toLocaleString()}{percentage ? "%" : ""}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="px-0 pb-3 mx-auto text-sm text-center">
        <p className="text-sm font-normal text-center text-black text-nowrap">
          {footer}
        </p>
      </CardFooter>
    </Card>
  );
}
