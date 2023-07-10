import { MakeConsumoTramo } from './types/consumoTramo';

const makeConsumoTramo = ({ ConsumoTramo }: { ConsumoTramo: any }): MakeConsumoTramo => {
  async function getAll(filters: any) {
    return await ConsumoTramo.findAll(filters);
  }

  return Object.freeze({
    getAll
  });
};

export default makeConsumoTramo;
