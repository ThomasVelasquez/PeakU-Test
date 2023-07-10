import { perdidasTramoDb } from '@data-access/index';
import makeFindAllPerdidasTramo from './find-all-perdidas-tramo';

const findAllPerdidasTramo = makeFindAllPerdidasTramo({
  perdidasTramoDb
});

const PerdidasTramoService = Object.freeze({
  findAllPerdidasTramo
});

export { findAllPerdidasTramo };

export default PerdidasTramoService;
