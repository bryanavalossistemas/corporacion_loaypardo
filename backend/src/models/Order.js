import sequelize from "../configs/database.js";
import { DataTypes } from "sequelize";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstDirection: {
      type: DataTypes.STRING,
    },
    secondDirection: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pendiente",
    },
    lastFourNumbersPay: {
      type: DataTypes.STRING,
    },
    subtotal: {
      type: DataTypes.INTEGER,
    },
    shippingAmount: {
      type: DataTypes.INTEGER,
    },
    tax: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Order;
