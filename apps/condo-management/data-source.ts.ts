import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  synchronize: false,
  logging: true,
});

export default dataSource;
