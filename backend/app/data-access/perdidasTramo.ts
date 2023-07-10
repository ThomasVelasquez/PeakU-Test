import { MakePerdidasTramo } from './types/perdidasTramo';

const makePerdidasTramo = ({ PerdidasTramo }: { PerdidasTramo: any }): MakePerdidasTramo => {
  async function getAll(filters: any) {
    return await PerdidasTramo.findAll(filters);
  }

  return Object.freeze({
    getAll
  });
};

export default makePerdidasTramo;
