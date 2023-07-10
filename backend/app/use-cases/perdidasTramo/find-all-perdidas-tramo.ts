import { MakePerdidasTramo } from '@data-access/types/perdidasTramo';
import { Request } from 'express';
import { Op } from 'sequelize';

interface MakeFindAllPerdidasTramo {
  perdidasTramoDb: MakePerdidasTramo;
}

const makeFindAllPerdidasTramo = ({ perdidasTramoDb }: MakeFindAllPerdidasTramo) => {
  const findAllPerdidasTramo = async (req: Request) => {
    const { startDate, endDate } = req.body;
    let where: any = {};

    if (startDate && endDate) {
      where = {
        Fecha: {
          [Op.between]: [startDate, endDate]
        }
      };
    }

    return await perdidasTramoDb.getAll({ where });
  };

  return findAllPerdidasTramo;
};

export default makeFindAllPerdidasTramo;
