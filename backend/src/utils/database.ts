import { Sequelize } from "sequelize-typescript";
import { Donation } from "../models/Donation";
import config from "../config/config";

const connection = new Sequelize({
    dialect: "postgres",
    host: config.dbHost,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    logging: false,
    models: [Donation],
});

export default connection;
