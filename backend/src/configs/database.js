import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "corporacion_loaypardo.sqlite",
});

export default sequelize;
