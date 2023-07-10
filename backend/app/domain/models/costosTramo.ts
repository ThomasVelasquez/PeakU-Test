import sequelize from '@infrastructure/database';
import { DataTypes } from 'sequelize';

const CostosTramo = sequelize.define(
  'costos_tramo',
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
    tableName: 'costos_tramo',
    timestamps: true,
    createdAt: false,
    updatedAt: false
  }
);

export default CostosTramo;
