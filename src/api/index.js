const Router = require('koa-router');

const api = Router();

api.get('/', (ctx) => {
  ctx.body = 'main page';
});

module.exports = api;