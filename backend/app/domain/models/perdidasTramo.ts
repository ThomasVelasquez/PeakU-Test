import sequelize from '@infrastructure/database';
import { DataTypes } from 'sequelize';

const PerdidasTramo = sequelize.define(
  'perdidas_tramo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Linea: {
      type: DataTypes.STRING
    },
    Fecha: {
      type: DataTypes.DATE
    },
    Residencial: {
      type: DataTypes.DOUBLE
    },
    Comercial: {
      type: DataTypes.DOUBLE
    },
    Industrial: {
      type: DataTypes.DOUBLE
    }
  },
  {
    tableName: 'perdidas_tramo',
    timestamps: true,
    createdAt: false,
    updatedAt: false
  }
);

export default PerdidasTramo;
