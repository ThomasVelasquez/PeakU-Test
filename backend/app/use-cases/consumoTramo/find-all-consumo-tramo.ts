import { Request } from 'express';
import { MakeConsumoTramo } from '@data-access/types/consumoTramo';
import { Op } from 'sequelize';

interface MakeFindAllConsumoTramo {
  consumoTramoDb: MakeConsumoTramo;
}

const makeFindAllConsumoTramo = ({ consumoTramoDb }: MakeFindAllConsumoTramo) => {
  const findAllConsumoTramo = async (req: Request) => {
    const { startDate, endDate } = req.body;
    let where: any = {};

    if (startDate && endDate) {
      where = {
        Fecha: {
          [Op.between]: [startDate, endDate]
        }
      };
    }

    return await consumoTramoDb.getAll({ where });
  };

  return findAllConsumoTramo;
};

export default makeFindAllConsumoTramo;
