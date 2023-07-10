import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type IPie = {
  label: string;
  render: any;
};

interface IPieChartProps {
  label: IPie[];
  comercialPercentage: number;
  residencialPercentage: number;
  industrialPercentage: number;
}

export const data = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [20, 20, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function CircleChart(
  { label,comercialPercentage,
    residencialPercentage,
    industrialPercentage, }: IPieChartProps
) {
  const labels = label.map((item) => item.label);
  const datasets = labels.map((labelValue) => ({
    ...data.datasets[0],
    label: labelValue,
    data: [residencialPercentage, comercialPercentage, industrialPercentage],
  }));

  const updatedData = {
    ...data,
    datasets,
    labels,
  };

  return <Pie data={updatedData} />;
}
