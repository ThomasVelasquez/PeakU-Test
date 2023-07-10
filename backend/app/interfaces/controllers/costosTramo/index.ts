import { findAllCostosTramo } from '@use-cases/costosTramo';

export default Object.freeze({
  findAllCostosTramo: (httpRequest: any) => findAllCostosTramo(httpRequest)
});