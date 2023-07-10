import { MakeCostosTramo } from '@data-access/types/costosTramo';
import { Op } from 'sequelize';

const makeCostosTramo = ({ CostosTramo }: { CostosTramo: any }): MakeCostosTramo => {
  async function getAll(filters: any) {
    return await CostosTramo.findAll(filters);
  }

  return Object.freeze({
    getAll
  });
};

export default makeCostosTramo;
