require('dotenv').config();
const port = process.env.PORT || 4000;

const Koa = require('koa');
const Logger = require('koa-logger');
const Router = require('koa-router');
const api = require('./api');

const app = new Koa();
const router = new Router();

app.use(Logger());

router.use('/', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
