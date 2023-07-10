import { useLoaderData } from "@remix-run/react";
import { findAllPerdidasTramo } from "~/services/perdidasTramo";
import Table from "~/components/Table";
import { CircleChart } from "~/components/CircleChart";
import { Box } from "@mui/material";
import CardInfo from "~/components/CardInfo";
// import { makeStyles, Theme } from '@material-ui/core/styles';

export async function loader() {
  const perdidasTramo = await findAllPerdidasTramo();
  return { perdidasTramos: perdidasTramo?.data };
}

export default function PerdidasTramo() {
  const data = useLoaderData();

  interface IPerdidasTramos {
    id: string;
    Linea: string;
    Fecha: string;
    Residencial: string;
    Comercial: string;
    Industrial: string;
  }

  const columns = [
    {
      label: "Linea",
      render: (row: IPerdidasTramos) => row.Linea,
    },
    {
      label: "Fecha",
      render: (row: IPerdidasTramos) => row.Fecha,
    },
    {
      label: "Residencial",
      render: (row: IPerdidasTramos) => row.Residencial,
    },
    {
      label: "Comercial",
      render: (row: IPerdidasTramos) => row.Comercial,
    },
    {
      label: "Industrial",
      render: (row: IPerdidasTramos) => row.Industrial,
    },
  ];

  const labels = [
    {
      label: "Residencial",
      render: (row: IPerdidasTramos) => row.Residencial,
    },
    {
      label: "Comercial",
      render: (row: IPerdidasTramos) => row.Comercial,
    },
    {
      label: "Industrial",
      render: (row: IPerdidasTramos) => row.Industrial,
    },
  ];
  const total = data.perdidasTramos.length;

  const comercial = data?.perdidasTramos
    ?.map((item: any) => JSON.stringify(item.Comercial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );

  const residencial = data.perdidasTramos
    ?.map((item: any) => JSON.stringify(item.Residencial))
    .reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + parseInt(currentValue),
      0
    );

  const industrial = data?.perdidasTramos
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
          {comercialPercentage === 0 &&
          residencialPercentage === 0 &&
          industrialPercentage === 0 ? (
            < div style={{marginBottom:10}}>
              <CardInfo
                comercialPercentage={comercialPercentage}
                residencialPercentage={residencialPercentage}
                industrialPercentage={industrialPercentage}
              />
            </div>
          ) : (
            <Box style={{ width: "50%", height: "30vh" }}>
              <>
                <CircleChart
                  label={labels}
                  comercialPercentage={Math.trunc(comercialPercentage)}
                  residencialPercentage={Math.trunc(residencialPercentage)}
                  industrialPercentage={Math.trunc(industrialPercentage)}
                />
              </>
            </Box>
          )}
          <Table columns={columns} rows={data.perdidasTramos} />
        </>
        // In case the Api or database gets change we can use the Loading component we have in components folder usign ? and : to set
      )}
    </>
  );
}
