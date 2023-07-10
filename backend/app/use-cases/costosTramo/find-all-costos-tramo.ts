import { Request } from 'express';
import { MakeCostosTramo } from '@data-access/types/costosTramo';
import { Op } from 'sequelize';

interface MakeFindAllCostosTramo {
  costosTramoDb: MakeCostosTramo;
}

const makeFindAllCostosTramo = ({ costosTramoDb }: MakeFindAllCostosTramo) => {
  const findAllCostosTramo = async (req: Request) => {
    const { startDate, endDate } = req.body;
    let where: any = {};

    if (startDate && endDate) {
      where = {
        Fecha: {
          [Op.between]: [startDate, endDate]
        }
      };
    }

    return await costosTramoDb.getAll({ where });
  };

  return findAllCostosTramo;
};

export default makeFindAllCostosTramo;
