import axios from "axios";
import { baseURL } from "~/utils";

export const findAllCostosTramo = async () => {
  const response = await axios.get(
    `${baseURL}/costos-tramo`
  );
  return response.data;
};
