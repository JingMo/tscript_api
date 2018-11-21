import 'reflect-metadata';
import * as path from 'path';
import * as express from 'express';
import { Container } from 'typedi';
import { createConnection, useContainer as ormContainer } from 'typeorm';
import { createExpressServer, useContainer } from 'routing-controllers';
import { db, server } from './configs';

useContainer(Container);
ormContainer(Container);

// 单数据库连接
createConnection(db).then(() => {
  startApp();
}).catch(err => {
  console.log(err);
});
// 多数据库连接方式
// createConnections([db, db2]);
async function startApp() {
  const expressApp = await createExpressServer({
    cors: true,
    controllers: [__dirname + '/controllers/**/*.js'],
    middlewares: [__dirname + '/middlewares/**/*.js']
  });
  expressApp.set('views', path.join(__dirname, 'views'));
  expressApp.set('view engine', 'ejs');
  expressApp.use(express.static(path.resolve(__dirname, 'static')));
  expressApp.listen(server.port);
  console.log('server started!');
}