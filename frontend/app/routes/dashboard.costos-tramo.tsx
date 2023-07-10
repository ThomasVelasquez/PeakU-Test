import { useLoaderData } from "@remix-run/react";
import Table from "~/components/Table";
import { findAllCostosTramo } from "~/services/costosTramo";
import { CircleChart } from "~/components/CircleChart";
import { Box } from "@mui/material";
import CardInfo from "~/components/CardInfo";

export async function loader() {
  const costosTramo = await findAllCostosTramo();
  return { costosTramos: costosTramo?.data };
}

interface ICostosTramo {
  id: string;
  Linea: string;
  Fecha: string;
  Residencial: string;
  Comercial: string;
  Industrial: string;
}

export default function CostosTramo() {
  const data = useLoaderData();

  const columns = [
    {
      label: "Linea",
      render: (row: ICostosTramo) => row.Linea,
    },
    {
      label: "Fecha",
      render: (row: ICostosTramo) => row.Fecha,
    },
    {
      label: "Residencial",
      render: (row: ICostosTramo) => row.Residencial,
    },
    {
      label: "Comercial",
      render: (row: ICostosTramo) => row.Comercial,
    },
    {
      label: "Industrial",
      render: (row: ICostosTramo) => row.Industrial,
    },
  ];
  const labels = [
    {
      label: "Residencial",
      render: (row: ICostosTramo) => row.Residencial,
    },
    {
      label: "Comercial",
      render: (row: ICostosTramo) => row.Comercial,
    },
    {
      label: "Industrial",
      render: (row: ICostosTramo) => row.Industrial,
    },
  ];

  const total = data.costosTramos.length;
  const comercial = data?.costosTramos
    ?.map((item: any) => JSON.stringify(item.Comercial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );
  const residencial = data?.costosTramos
    ?.map((item: any) => JSON.stringify(item.Residencial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );
  const industrial = data?.costosTramos
    ?.map((item: any) => JSON.stringify(item.Industrial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );

  const comercialPercentage = (comercial / total) * 100;
  const residencialPercentage = (residencial / total) * 100;
  const industrialPercentage = (industrial / total) * 100;

  return (
    <>
      <CardInfo
        comercialPercentage={comercialPercentage}
        residencialPercentage={residencialPercentage}
        industrialPercentage={industrialPercentage}
      />
      <Box style={{ width: "50%", height: "50vh" }}>
        <CircleChart
          label={labels}
          comercialPercentage={Math.trunc(comercialPercentage)}
          residencialPercentage={Math.trunc(residencialPercentage)}
          industrialPercentage={Math.trunc(industrialPercentage)}
        />
      </Box>
      <Table columns={columns} rows={data.costosTramos} />
    </>
  );
}
