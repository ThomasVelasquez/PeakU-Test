import { costosTramoDb } from '@data-access/index';
import makeFindAllCostosTramo from './find-all-costos-tramo';

const findAllCostosTramo = makeFindAllCostosTramo({
  costosTramoDb
});

const costosTramoService = Object.freeze({
  findAllCostosTramo
});

export { findAllCostosTramo };

export default costosTramoService;
