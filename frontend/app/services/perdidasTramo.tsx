import axios from "axios";
import { baseURL } from "~/utils";

export const findAllPerdidasTramo = async () => {
  const response = await axios.get(
    `${baseURL}/perdidas-tramo`
  );
  return response.data;
};
