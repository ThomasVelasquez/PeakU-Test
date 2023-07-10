import { useLoaderData } from "@remix-run/react";
import { findAllConsumoTramo } from "~/services/consumoTramo";
import Table from "~/components/Table";
import { CircleChart } from "~/components/CircleChart";
import { Box } from "@mui/material";
import CardInfo from "~/components/CardInfo";

export async function loader() {
  const consumosTramos = await findAllConsumoTramo();
  return { consumosTramos: consumosTramos?.data };
}
interface IConsumoTramo {
  id: string;
  Linea: string;
  Fecha: string;
  Residencial: string;
  Comercial: string;
  Industrial: string;
}

export default function ConsumoTramo() {
  const data = useLoaderData();

  const columns = [
    {
      label: "Linea",
      render: (row: IConsumoTramo) => row.Linea,
    },
    {
      label: "Fecha",
      render: (row: IConsumoTramo) => row.Fecha,
    },
    {
      label: "Residencial",
      render: (row: IConsumoTramo) => row.Residencial,
    },
    {
      label: "Comercial",
      render: (row: IConsumoTramo) => row.Comercial,
    },
    {
      label: "Industrial",
      render: (row: IConsumoTramo) => row.Industrial,
    },
  ];

  const labels = [
    {
      label: "Residencial",
      render: (row: IConsumoTramo) => row.Residencial,
    },
    {
      label: "Comercial",
      render: (row: IConsumoTramo) => row.Comercial,
    },
    {
      label: "Industrial",
      render: (row: IConsumoTramo) => row.Industrial,
    },
  ];

  const total = data.consumosTramos.length;
  const comercial = data?.consumosTramos
    ?.map((item: any) => JSON.stringify(item.Comercial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );
  const residencial = data?.consumosTramos
    ?.map((item: any) => JSON.stringify(item.Residencial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );
  const industrial = data?.consumosTramos
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
      {data && (
        <>
            <CardInfo
              comercialPercentage={Math.trunc(comercialPercentage)}
              residencialPercentage={Math.trunc(residencialPercentage)}
              industrialPercentage={Math.trunc(industrialPercentage)}
            />
          <Box style={{ width: "50%", height: "40vh" }}>
            <CircleChart
              label={labels}
              comercialPercentage={Math.trunc(comercialPercentage)}
              residencialPercentage={Math.trunc(residencialPercentage)}
              industrialPercentage={Math.trunc(industrialPercentage)}
            />
          </Box>
          <Table columns={columns} rows={data.consumosTramos} />
        </>
        // In case the Api or database gets change we can use the Loading component we have in components folder usign ? and : to set
      )}
    </>
  );
}
