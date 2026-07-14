import { DataSourceOptions, DataSource } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'gestion_location',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/infrastructure/persistences/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
