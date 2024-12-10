import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: (msg) => logger.debug(msg)
});

export default sequelize;