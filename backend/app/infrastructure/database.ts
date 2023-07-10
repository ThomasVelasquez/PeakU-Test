import { Dialect, Sequelize } from 'sequelize';
import { DATABASE } from './config';

const sequelize = new Sequelize(DATABASE.NAME!, DATABASE.USERNAME!, DATABASE.PASSWORD, {
  host: DATABASE.HOST,
  dialect: DATABASE.DIALECT as Dialect
});

export default sequelize;
