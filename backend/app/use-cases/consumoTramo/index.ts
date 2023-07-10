import { consumoTramoDb } from '@data-access/index';
import makeFindAllConsumoTramo from './find-all-consumo-tramo';

const findAllConsumoTramo = makeFindAllConsumoTramo({
  consumoTramoDb
});

const consumoTramoService = Object.freeze({
  findAllConsumoTramo
});

export { findAllConsumoTramo };

export default consumoTramoService;
