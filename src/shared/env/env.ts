import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

export default {
  NODE_ENV: 'development',
  PORT: Number(process.env.PORT || 8080),
  DOCS_ENDPOINT: '/docs',
  DIR_SWAGGER: process.env.DIR_SWAGGER || './src/shared/docs/swagger.yml',
  DB_CONNECTION: process.env.DB_CONNECTION || 'mariadb://rootuser:rootpass@localhost/mydatabase',
  DB_CONNECTION_MONGO: process.env.DB_CONNECTION_MONGO || 'mongodb://rootuser:rootpass@localhost:27017/',
  SECURITY_API_URL: process.env.SECURITY_API_URL || 'http://localhost:8080',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  PREFIX_URL: process.env.PREFIX_URL || '/api',
  MQ_SERVER_URL: process.env.MQ_SERVER_URL || 'tcp://127.0.0.1:9000',
  DIR_ERRORS: process.env.DIR_ERROR || './src/shared/handler/error.yml',
};
