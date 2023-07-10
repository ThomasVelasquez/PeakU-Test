import axios from "axios";
import { baseURL } from "~/utils";

export const findAllConsumoTramo = async () => {
  const response = await axios.get(
    // `http://localhost:8080/api/v1/consumo-tramo`
    `${baseURL}/consumo-tramo`
  );
  return response.data;
};
