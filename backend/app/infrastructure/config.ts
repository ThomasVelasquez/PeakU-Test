import * as dotenv from 'dotenv';
dotenv.config();

export const DATABASE = {
  NAME: process.env.DB_NAME,
  HOST: process.env.DB_HOST,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DIALECT: process.env.DB_DIALECT
};
