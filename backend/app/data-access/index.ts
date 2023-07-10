import CostosTramo from '@domain/models/costosTramo';
import ConsumoTramo from '@domain/models/consumoTramo';
import PerdidasTramo from '@domain/models/perdidasTramo';

import makeConsumoTramo from './consumoTramo';
import makeCostosTramo from './costosTramo';
import makePerdidasTramo from './perdidasTramo';

const costosTramoDb = makeCostosTramo({ CostosTramo });
const perdidasTramoDb = makePerdidasTramo({ PerdidasTramo });
const consumoTramoDb = makeConsumoTramo({ ConsumoTramo });

export { costosTramoDb, perdidasTramoDb, consumoTramoDb };
