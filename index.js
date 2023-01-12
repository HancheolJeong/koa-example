// const Koa = require('koa');
// const app = new Koa();
// const port = process.env.PORT || 3000; //환경변수에있는 포트번호를 우선으로가져오고 환경변수가없으면 포트번호 3000
// app.use(ctx => {
//  ctx.body = 'Hello World';
// });
// app.listen(port, () => {
//  console.log(`웹서버 구동... ${port}`);
// });

// const Koa = require('koa');
// const Router = require('@koa/router');
// const app = new Koa();
// const router = new Router();
// const port = process.env.PORT || 3000;
// router.get('/', (ctx, next) => {
//  ctx.body = 'Hello World';
// });
// app.use(router.routes());
// app.use(router.allowedMethods());
// app.listen(port, () => {
//  console.log(`웹서버 구동... ${port}`);
// });

const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;
router.get('/', (ctx, next) => {
 ctx.body = 'Hello World';
});
router.get('/sitemap', (ctx, next) => {
 ctx.body = '사이트맵';
});
router.get('/page/:name', (ctx, next) => {
 let name = ctx.params.name;
 ctx.body = `${name} 페이지`;
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
 console.log(`웹서버 구동... ${port}`);
});