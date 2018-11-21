import { ConnectionOptions } from 'typeorm';

export {
  db,
  // db2,
  server
}

const db: ConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'ts_orm',
  entities: ['dist/entities/**/*.js'],
  synchronize: true,
  logging: false
}

/*
const db2: ConnectionOptions = {
  type: 'mysql',
  host: '',
  port: 3306,
  username: '',
  password: '',
  database: '',
  entities: [''],
  synchronize: true,
  logging: false
}
*/

const server = {
  port: 3000
}